"use client";
import React, { useEffect, useState } from "react";
import { Vortex } from "./ui/vortex";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { LoaderOne } from "@/components/ui/loader";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`flex w-full flex-col space-y-2 ${className || ""}`}>
      {children}
    </div>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    // Simulate async request (replace with API call)
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      reset();
    }, 2000);
  };

  return (
    <>
      <section id="contact">
        <div className="w-[calc(100%-4rem)] mx-auto h-[30rem]">
          <Vortex
            backgroundColor="black"
            className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8">
              <h2
                className="text-xl font-bold text-neutral-800 dark:text-neutral-200"
                data-aos="zoom-in"
              >
                Let's Connect
              </h2>
              <p
                className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300"
                data-aos="zoom-in-up"
              >
                Send Your Message
              </p>

              <form
                className="my-8 flex flex-col justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input
                      id="firstname"
                      placeholder="Yash"
                      type="text"
                      {...register("firstname", { required: true })}
                    />
                    {errors.firstname && (
                      <span className="text-red-600 text-sm">
                        This field is required
                      </span>
                    )}
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input
                      id="lastname"
                      placeholder="Kumar"
                      type="text"
                      {...register("lastname", { required: true })}
                    />
                  </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    placeholder="portfolio@gmail.com"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">
                      This field is required
                    </span>
                  )}
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={5}
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-red-600 text-sm">
                      This field is required
                    </span>
                  )}
                </LabelInputContainer>

                <button
                  className={cn(
                    "group/btn relative flex items-center justify-center h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]",
                    loading && "cursor-not-allowed opacity-70",
                  )}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <LoaderOne /> : "Sign up →"}
                </button>
              </form>
            </div>
          </Vortex>
        </div>
      </section>
    </>
  );
};

export default Contact;
