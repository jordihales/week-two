<template>
  <div class="w-full h-64 border-solid border-b relative flex items-center">
    <div class="container flex max-w-screen-lg">
      <div class="w-1/2">
        <div class="flex items-center">
          <svg
            fill="000"
            viewbox="0 0 102 102"
            height="102"
            width="102"
          >
            <g>
              <circle
                cx="51"
                cy="51"
                r="51"
              />
            </g>
          </svg>
          <div class="ml-6">
            <div class="flex items-center mb-4">
              <h2 class="text-4xl font-semibold mr-4">Jordi Hales</h2>
              <p class="uppercase bg-gray-100 py-1 px-2 rounded-full border-solid border-secondary border text-xs">Hobby</p>
            </div>
            <p class="uppercase text-primary text-xs mb-2">Git Integration</p>
            <p class="font-medium text-sm">jordihales</p>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex justify-end">
          <button class="text-sm text-primary border-solid border-secondary border rounded-md px-8 py-2 mr-6">Invite Team</button>
          <button class="text-sm text-white bg-black border-solid border-black border rounded-md px-8 py-2">Import Project</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>