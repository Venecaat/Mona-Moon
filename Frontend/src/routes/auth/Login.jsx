import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FieldErrorMsg } from "../../components/form/FieldErrorMsg.jsx";
import { UsersApi } from "../../api/UsersApi.jsx";
import PropTypes from "prop-types";

export const Login = ({ setEmail, setLastName, setFirstName }) => {
    let showInvalidCredentialsErrorMsg = false;
    const navigate = useNavigate();

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .required("Kötelező megadni!"),
        password: Yup.string()
            .required("Kötelező megadni!")
    })

    return (
        <div className="text-2xl font-semibold">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    remember: false
                }}
                validationSchema={ LoginSchema }
                onSubmit={ async (values) => {
                    const response = await UsersApi.login(values.email, values.password);

                    showInvalidCredentialsErrorMsg = response.status === 401;

                    if (response.status === 200) {
                        setEmail(response.user.email);
                        setLastName(response.user.lastName);
                        setFirstName(response.user.firstName);

                        sessionStorage.setItem("email", response.user.email);
                        sessionStorage.setItem("lastName", response.user.lastName);
                        sessionStorage.setItem("firstName", response.user.firstName);

                        navigate("/");
                    }
                }}>
                {({ errors, touched }) => (
                    <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto p-8 gap-4">
                        <h1 className="text-4xl text-primary font-bold text-center mb-6">Bejelentkezés</h1>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="Email"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.email && touched.email ? ( <FieldErrorMsg errorMsg={ errors.email } /> ) : null}
                        </div>
                        <div>
                            <label htmlFor="password">Jelszó</label>
                            <Field type="password" id="password" name="password" placeholder="Jelszó"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.password && touched.password ? ( <FieldErrorMsg errorMsg={ errors.password } /> ) : null}

                            {/* MAKE IT MODAL? */}
                            <Link to="/jelszo-visszaallitas" className="text-lg text-primary hover:text-accent
                                ease-in-out duration-200">
                                Elfelejtetted a jelszavad?
                            </Link>
                        </div>
                        <div>
                            <div>
                                <button type="submit" className="btn w-full mt-4 bg-secondary border-secondary text-xl text-primary
                                hover:bg-accent hover:border-accent">
                                    Bejelentkezés
                                </button>
                            </div>
                            <div className="label justify-normal">
                                <Field type="checkbox" id="remember" name="remember" className="toggle toggle-primary mr-2" />
                                <label className="flex">
                                    <span className="text-lg text-primary items-center">Remember me</span>
                                </label>
                            </div>
                            <div>
                                <Link to="/regisztracio" className="text-lg text-primary hover:text-accent
                                ease-in-out duration-200">
                                    Még nincs felhasználód?
                                </Link>
                                { showInvalidCredentialsErrorMsg ? (<FieldErrorMsg extraClasses="text-center mt-2" errorMsg="Hibás E-mail cím vagy jelszó!" />) : null }
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

Login.propTypes = {
    setEmail: PropTypes.func,
    setLastName: PropTypes.func,
    setFirstName: PropTypes.func
};