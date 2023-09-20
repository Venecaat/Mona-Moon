import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FieldErrorMsg } from "../../components/form/FieldErrorMsg.jsx";
import { RequiredStar } from "../../components/form/RequiredStar.jsx";
import { UsersApi } from "../../api/UsersApi.jsx";

export const Register = () => {
    let showEmailIsTakenErrorMsg = false;

    const RegisterSchema = Yup.object().shape({
        lastName: Yup.string()
            .required("Kötelező megadni!")
            .min(2, "Min 2 karakter hosszúnak kell lennie!"),
        firstName: Yup.string()
            .required("Kötelező megadni!")
            .min(2, "Min 2 karakter hosszúnak kell lennie!"),
        email: Yup.string()
            .required("Kötelező megadni!")
            .matches("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", {message: "Érvénytelen email cím formátum!"}),
        password: Yup.string()
            .required("Kötelező megadni!")
            .min(8, "Min 8 karakter hosszúnak kell lennie!"),
        passwordConfirm: Yup.string()
            .required("Kötelező megadni!")
            .oneOf([Yup.ref("password")], "Nem egyezik!")
    })

    return (
        <div className="text-2xl font-semibold">
            <Formik
                initialValues={{
                    lastName: "",
                    firstName: "",
                    email: "",
                    password: "",
                    passwordConfirm: ""
                }}
                validationSchema={RegisterSchema}
                onSubmit={ async (values) => {
                    const user = await UsersApi.register(values.lastName, values.firstName, values.email, values.password);

                    showEmailIsTakenErrorMsg = user.status === 409;

                    {/* TODO: Make it fancier */}
                    if (user.status === 201) alert("A regisztráció sikeres volt!");
                }}>
                {({ errors, touched }) => (
                    <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto p-8 gap-4">
                        <h1 className="text-4xl text-primary font-bold text-center mb-6">Regisztráció</h1>
                        <div>
                            <label htmlFor="lastName">Vezetéknév<RequiredStar /></label>
                            <Field id="lastName" name="lastName" placeholder="Vezetéknév"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.lastName && touched.lastName ? ( <FieldErrorMsg errorMsg={ errors.lastName } /> ) : null}
                        </div>
                        <div>
                            <label htmlFor="firstName">Keresztnév<RequiredStar /></label>
                            <Field id="firstName" name="firstName" placeholder="Keresztnév"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.firstName && touched.firstName ? ( <FieldErrorMsg errorMsg={ errors.firstName } /> ) : null}
                        </div>
                        <div>
                            <label htmlFor="email">Email<RequiredStar /></label>
                            <Field type="email" id="email" name="email" placeholder="Email"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.email && touched.email ? ( <FieldErrorMsg errorMsg={ errors.email } /> ) : null}
                        </div>
                        <div>
                            <label htmlFor="password">Jelszó<RequiredStar /></label>
                            <Field type="password" id="password" name="password" placeholder="Jelszó"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.password && touched.password ? ( <FieldErrorMsg errorMsg={ errors.password } /> ) : null}
                        </div>
                        <div>
                            <label htmlFor="passwordConfirm">Jelszó megerősítése<RequiredStar /></label>
                            <Field type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Jelszó megerősítése"
                                   className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                            { errors.passwordConfirm && touched.passwordConfirm ? ( <FieldErrorMsg errorMsg={ errors.passwordConfirm } /> ) : null}
                        </div>
                        <div>
                            <button type="submit" className="btn w-full mt-4 bg-secondary border-secondary text-xl text-primary
                            hover:bg-accent hover:border-accent">
                                Regisztráció
                            </button>

                            <Link to="/bejelentkezes" className="text-lg text-primary hover:text-accent
                            ease-in-out duration-200">
                                Már van felhasználód?
                            </Link>
                            { showEmailIsTakenErrorMsg ? (<FieldErrorMsg extraClasses="text-center mt-2" errorMsg="Az E-mail cím már foglalt!" />) : null }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}