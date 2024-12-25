import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { createFuelFormSchema } from "@/schemas/createFuelFormSchame";
import { z } from "zod";
import { Input } from "../ui/input";

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
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Input placeholder="Content" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default CreateFuelForm;
