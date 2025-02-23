"use client";

import React, {useState} from "react";
import {useForm} from "react-hook-form";

const ContactForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [message, setMessage] = useState("");

    const onSubmit = async (data: any) => {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setMessage("Your message has been sent successfully!");
            reset();
        } else {
            setMessage("Failed to send message. Try again.");
        }
    };

    return (
        <div className="max-w-lg min-w-96 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            {message && <p className="mb-4 text-green-500">{message}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        {...register("name", {required: true})}
                        className="w-full p-2 border rounded"
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email"
                            }
                        })}
                        className="w-full p-2 border rounded"
                        placeholder="Your Email"
                    />
                    {typeof errors.email?.message === "string" && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                        {...register("message", {required: true})}
                        className="w-full p-2 border rounded"
                        rows={4}
                        placeholder="Your Message"
                    />
                    {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
