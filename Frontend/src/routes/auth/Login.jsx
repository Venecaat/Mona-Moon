import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

export const Login = () => {
    return (
        <div className="text-2xl font-semibold">
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                    onSubmit={() => {

                    }}>
                <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto p-8 gap-4">
                    <h1 className="text-4xl text-primary font-bold text-center mb-6">Bejelentkezés</h1>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" placeholder="Email"
                               className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Jelszó</label>
                        <Field type="password" id="password" name="password" placeholder="Jelszó"
                               className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                        <Link to="/jelszo-visszaallitas" className="text-lg text-primary hover:text-accent
                            ease-in-out duration-200">
                            Elfelejtetted a jelszavad?
                        </Link>
                    </div>
                    <div>
                        <button type="submit" className="btn w-full mt-4 bg-secondary border-secondary text-xl text-primary
                        hover:bg-accent hover:border-accent">
                            Bejelentkezés
                        </button>

                        {/* MAKE IT MODAL? */}
                        <Link to="/regisztracio" className="text-lg text-primary hover:text-accent
                        ease-in-out duration-200">
                            Még nincs felhasználód?
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}