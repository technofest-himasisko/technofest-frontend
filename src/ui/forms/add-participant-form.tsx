"use client";

import { addParticipant } from "@/lib/actions/add-participant";
import { Input } from "../atoms/input";
import { Alert, AlertDescription } from "../atoms/alert";
import { FormButton } from "../atoms/form-button";
import { Check, X } from "@phosphor-icons/react";
import { Label } from "../atoms/label";
import { useFormState } from "react-dom";
import { FormState } from "@/lib/definitions/web";

interface Props {
  onFormOpen?: (isOpened: boolean) => void;
}

const initialState: FormState = {
  message: undefined,
  errors: undefined,
};

export default function AddParticipantForm({ onFormOpen }: Props) {
  // const [isAddingParticipantLoading, setIsAddingParticipantLoading] =
  //   useState<boolean>(false);

  // const participantForm = useForm<z.infer<typeof participantFormSchema>>({
  //   resolver: zodResolver(participantFormSchema),
  //   defaultValues: {
  //     participantId: "",
  //   },
  // });

  // function onParticipantFormSubmit(
  //   values: z.infer<typeof participantFormSchema>,
  // ) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   setIsAddingParticipantLoading(true);
  //   wait().then(() => {
  //     participantForm.reset();
  //     onFormOpen && onFormOpen(false);
  //     setIsAddingParticipantLoading(false);
  //   });
  // }

  function handleCancelAddParticipantClick() {
    onFormOpen && onFormOpen(false);
    // participantForm.reset();
  }

  const [state, formAction] = useFormState(addParticipant, initialState);

  return (
    // <Form {...participantForm}>
    //   <form
    //     onSubmit={participantForm.handleSubmit(onParticipantFormSubmit)}
    //     className="mt-2 flex w-full flex-col gap-y-4"
    //   >
    //     <div className="grow">
    //       <FormField
    //         control={participantForm.control}
    //         name="participantId"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Masukkan ID peserta</FormLabel>
    //             <div className="flex">
    //               <FormControl>
    //                 <Input
    //                   type="text"
    //                   placeholder="xxxxxxxx"
    //                   leftSection="P"
    //                   {...field}
    //                 />
    //               </FormControl>
    //             </div>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />
    //     </div>
    //     <Alert variant="danger">
    //       <AlertDescription>Peserta tidak ditemukan.</AlertDescription>
    //     </Alert>
    //     <div className="flex justify-end">
    //       <div className="flex">
    //         <FormButton
    //           type="submit"
    //           className="px-2.5 py-1.5 md:px-4"
    //           loading={isAddingParticipantLoading}
    //         >
    //           <Check weight="bold" className="text-[1.5em]" />
    //         </FormButton>
    //         <FormButton
    //           variant="outline"
    //           onClick={handleCancelAddParticipantClick}
    //           disabled={isAddingParticipantLoading}
    //           className="border border-primary/20 px-2.5 py-1.5 md:px-4"
    //         >
    //           <X weight="bold" className="text-[1.5em]" />
    //         </FormButton>
    //       </div>
    //     </div>
    //   </form>
    // </Form>

    <form action={formAction} className="mt-2 flex w-full flex-col gap-y-4">
      {/* <FormLabel>Masukkan ID peserta</FormLabel> */}
      <Label htmlFor="participantId">Masukkan ID peserta</Label>
      <Input
        type="text"
        placeholder="xxxxxxxx"
        leftSection="P"
        id="participantId"
        name="participantId"
      />
      {state.errors?.participantId && (
        <p className="-mt-2 text-sm font-medium text-red-400">
          {state.errors?.participantId}
        </p>
      )}

      <Alert variant="danger">
        <AlertDescription>Peserta tidak ditemukan.</AlertDescription>
      </Alert>

      <div className="flex justify-end">
        <div className="flex">
          <FormButton type="submit" className="px-2.5 py-1.5 md:px-4">
            <Check weight="bold" className="text-[1.5em]" />
          </FormButton>
          <FormButton
            variant="outline"
            onClick={handleCancelAddParticipantClick}
            // disabled={isAddingParticipantLoading}
            noLoading
            className="border border-primary/20 px-2.5 py-1.5 md:px-4"
          >
            <X weight="bold" className="text-[1.5em]" />
          </FormButton>
        </div>
      </div>
    </form>
  );
}
