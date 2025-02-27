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
        <div className="max-w-lg w-80 md:min-w-96 p-6 bg-blue-50 bg-opacity-10 backdrop-blur-md shadow-md drop-shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            {message && <p className="mb-4 text-green-500">{message}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-start">Name</label>
                    <input
                        {...register("name", {required: true})}
                        className="w-full p-2 border rounded bg-opacity-10 bg-gray-800"
                        placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm text-start">Name is required</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-start">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email"
                            }
                        })}
                        className="w-full p-2 border rounded bg-opacity-10 bg-gray-800"
                        placeholder="Your Email"
                    />
                    {typeof errors.email?.message === "string" && (
                        <p className="text-red-500 text-sm text-start">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-start">Message</label>
                    <textarea
                        {...register("message", {required: true})}
                        className="w-full p-2 border rounded bg-opacity-10 bg-gray-800"
                        rows={4}
                        placeholder="Your Message"
                    />
                    {errors.message && <p className="text-red-500 text-sm text-start">Message is required</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-600 text-white py-2 px-4 backdrop-blur-3xl rounded hover:bg-gray-800"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
