import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Navbar from "./Navbar";

export function Contact() {
  return (
    <>
      <Navbar /><br /><br /><br /><hr />
      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center dark:bg-slate-900 dark:text-white ">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-base lg:!text-2xl"
          >
            
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            We&apos;re Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl dark:bg-slate-900 dark:text-white">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="map"
              className="w-full h-full lg:max-h-[510px]"
            />
            <form
              action="#"
              className="flex flex-col gap-4 lg:max-w-sm"
            >
              <Typography
                variant="small"
                className="text-left !font-semibold"
              >
                Select Options for Business Engagement
              </Typography>
              <div className="flex gap-4 " >
                <select className="select select-info w-full max-w-xs dark:bg-slate-900 dark:text-white">
                  <option disabled selected>Support Types</option>
                  <option><Button variant="outlined" className="max-w-fit">
                  General inquiry
                </Button></option>
                  <option><Button variant="outlined" className="max-w-fit">
                  Product Support
                </Button></option>
                  <option><Button variant="outlined" className="max-w-fit">Customer Support</Button></option>
                </select>
                
                
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="First Name"
                    name="first-name"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Last Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Last Name"
                    name="last-name"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button className="w-full bg-green-500 text-white h-10">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section></>
  );
}

export default Contact;