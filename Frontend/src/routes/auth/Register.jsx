import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="text-2xl font-semibold">
            <Formik initialValues={{
                lastName: "",
                firstName: "",
                email: "",
                password: "",
                passwordConfirm: ""
            }}
                    onSubmit={() => {

                    }}>
                <Form className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto p-8 gap-4">
                    <h1 className="text-4xl text-primary font-bold text-center mb-6">Regisztráció</h1>
                    <div>
                        <label htmlFor="lastName">Vezetéknév</label>
                        <Field id="lastName" name="lastName" placeholder="Vezetéknév"
                               className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName">Keresztnév</label>
                        <Field id="firstName" name="firstName" placeholder="Keresztnév"
                               className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary"
                        />
                    </div>
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
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Jelszó megerősítése</label>
                        <Field type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Jelszó megerősítése"
                               className="input input-bordered text-xl w-full text-primary focus:outline-none focus:border-2 focus:border-primary" />
                    </div>
                    <div>
                        <button type="submit" className="btn w-full mt-4 bg-secondary border-secondary text-xl text-primary
                        hover:bg-accent hover:border-accent">
                            Regisztráció
                        </button>

                        {/* MAKE IT MODAL? */}
                        <Link to="/bejelentkezes" className="text-lg text-primary hover:text-accent
                        ease-in-out duration-200">
                            Már van felhasználód?
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}