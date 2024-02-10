<script>
    import { Input, Label, Button, Checkbox, A, Heading, P } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

  </script>
<section class="flex flex-columns items-center justify-center min-h-[700px]">
   <div class="container m-5 md:m-10">
   <div class="text-center">
    <Heading tag="h1" class="mb-4">
      Contact
     </Heading>
   </div>
   
   <div>
    <P class="mb-3" weight="light">
      123 Sukhumvit Road, Bangkok
    Khlong Toei, Bangkok 10110
    Thailand
    </P>
    
    <iframe
      width="100%"
      height="300"
      style="border:0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=
        &q=Space+Needle,Seattle+WA">
    </iframe>
  </div>
  
      <form class="mt-10">
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
          <div class="mb-6">
            <Label for="email" class="mb-2">Email</Label>
            <Input type="email" id="email" placeholder="" required />
          </div>
        </div>
       
        <div class="text-center">
        <Button type="submit" size="xl">Submit <ArrowRightOutline class="w-7 h-7 ms-2" /></Button>
        </div>
      </form>
   </div>
</section>