<script>
    import { Input, Label, Button, Checkbox, A, Heading } from 'flowbite-svelte';

  </script>
<section class="flex flex-columns items-center justify-center min-h-[700px]">
   <div class="container m-5 md:m-10">
   <div class="text-center">
    <Heading tag="h1" class="mb-4">
      Contact
     </Heading>
   </div>
   
      <form>
        <div class="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
          <div>
            <Label for="first_name" class="mb-2">Firstname</Label>
            <Input type="text" id="first_name" placeholder="" required />
          </div>
          <div>
            <Label for="last_name" class="mb-2">Lastname</Label>
            <Input type="text" id="last_name" placeholder="" required />
          </div>
          <div>
            <Label for="phone" class="mb-2">Phone</Label>
            <Input type="tel" id="phone" placeholder="" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"} required />
          </div>
        </div>
        <div class="mb-6">
          <Label for="email" class="mb-2">Email</Label>
          <Input type="email" id="email" placeholder="" required />
        </div>
        <Button type="submit">Submit</Button>
      </form>
   </div>
</section>