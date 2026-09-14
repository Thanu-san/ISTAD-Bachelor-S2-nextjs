"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast, Toaster } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"


// using zod validation
const formSchema = z.object({
  email: z
    .string()
    .email("Required @ for email")
   ,
  password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(20, { message: "Password cannot exceed 20 characters" })
  .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, { message: "Must contain at least one special character" })
})

export function LoginFormComponent() {
  // using react hook form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // logic with form 
  function onSubmit(data: z.infer<typeof formSchema>) {
      const postdata = async () =>{
        const authUrl = process.env.NEXT_PUBLIC_AUTH_API || 'https://sombobaeb.cheat.casa';
        const res = await fetch(`${authUrl}/auth/login`,{
          method:'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body:JSON.stringify(data)
        })
        if(res.ok){
          toast.success("Login Successfully!")
          setTimeout(()=> {
            redirect('/product')
          },2000)
        }else{
          toast.error("Incorrect password or email");
        }
      }
      postdata();
  }

  return (
    <Card className="w-full sm:max-w-md">
      <Toaster/>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        {/* <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    type="email" //input as email
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="koko@gmail.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Password
                  </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-description"
                      placeholder="QWER!@#$$"
                      type="password" //add input as password
                      // className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          {/* <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button> */}
          <Button type="submit" form="form-rhf-demo">
            Login
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
