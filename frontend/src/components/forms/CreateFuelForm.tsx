import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { createFuelFormSchema } from "@/schemas/createFuelFormSchame";
import { z } from "zod";

function CreateFuelForm() {
  const form = useForm<z.infer<typeof createFuelFormSchema>>({
    resolver: zodResolver(createFuelFormSchema),
    defaultValues: {},
  });

  const { handleSubmit, control } = form;

  function submitHandler(data: z.infer<typeof createFuelFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FormField
          control={control}
          name="content"
          render={(field) => (
            <FormItem>
              <FormControl>
                <textarea
                  className="w-full h-20 p-1 border-2 rounded-md placeholder:text-xl ring-0"
                  placeholder="Creative thought!"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CreateFuelForm;
