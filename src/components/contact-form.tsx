"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";
import { createSupabaseBrowserClient } from "@/app/utils/supabase/browserClient";
import PhoneInputField from "@/components/PhoneInput";

export function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    product: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const supabase = createSupabaseBrowserClient();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Add the form data to Supabase
    try {
      const { error } = await supabase
        .from("maptiu_contactus") // Replace with your Supabase table name
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            product: formData.product,
            description: formData.description,
          },
        ])
        .select();

      if (error) {
        console.error("Error inserting data into Supabase:", error);
        toast({
          title: "Error",
          description: "Error submitting form",
          variant: "destructive",
          duration: 5000,
          className: "bg-black text-white",
        });
        return;
      }

      // Notify the user of success
      toast({
        title: "Success",
        description: "Form submitted successfully!",
        variant: "default",
        duration: 5000,
        className: "bg-black text-white",
      });

      // Reset the form after submission
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        product: "",
        description: "",
      });
    } catch (error) {
      console.error("Error during form submission:", error);
      toast({
        title: "Error",
        description: "Error submitting form",
        variant: "destructive",
        duration: 5000,
        className: "bg-black text-white",
      });
    }
  };

  return (
    <Card className="w-full bg-white shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
          <Input
            type="text"
            name="full_name"
            placeholder="Your Name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <div>
            <PhoneInputField
              value={formData.phone}
              onChange={(mobile, country) =>
                setFormData((prevState) => ({
                  ...prevState,
                  phone: mobile,
                  country,
                }))
              }
            />
          </div>
          {/* Dropdown for product selection */}
          <div>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
            >
              <option value="">Select a product</option>
              <option value="Map It">Map It</option>
              <option value="Hire It">Hire It</option>
              <option value="Staff It">Staff It</option>
            </select>
          </div>
          <Textarea
            name="description"
            placeholder="Please provide details about your inquiry, and we will respond promptly."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#083B73] focus:border-[#083B73] block w-full p-2.5"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#083B73] to-[#083B73] hover:from-[#083B73]/90 hover:to-[#083B73]/90 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
