<template>
  <section class="diva">
    <fwb-footer footer-type="socialmedia" class="w-9/12 m-auto footer mt-0">
      <div class="md:flex md:justify-between">
        <fwb-footer-brand
          alt="Flowbite Logo"
          href="https://flowbite.com"
          name="Flowbite"
          src="https://flowbite.com/docs/images/logo.svg"
        />
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-white uppercase dark:text-black font-serif"
            >
              Resources
            </h2>
            <fwb-footer-link-group class="flex flex-col items-start">
              <fwb-footer-link class="mb-4 text-white font-serif" href="/">
                Flowbite
              </fwb-footer-link>
              <fwb-footer-link class="mb-4 text-white font-serif" href="/">
                Tailwind CSS
              </fwb-footer-link>
            </fwb-footer-link-group>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold uppercase text-white dark:text-black font-serif"
            >
              Follow us
            </h2>
            <fwb-footer-link-group class="flex flex-col items-start">
              <fwb-footer-link class="mb-4 text-white font-serif" href="/">
                GitHub
              </fwb-footer-link>
              <fwb-footer-link class="mb-4 text-white font-serif" href="/">
                Discord
              </fwb-footer-link>
            </fwb-footer-link-group>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold uppercase text-white dark:text-black font-serif"
            >
              Legal
            </h2>
            <fwb-footer-link-group class="flex flex-col items-start">
              <fwb-footer-link class="mb-4 text-white font-serif" href="/">
                Privacy Policy
              </fwb-footer-link>
              <fwb-footer-link class="mb-4 text-white font-serif" href="/">
                Terms & Conditions
              </fwb-footer-link>
            </fwb-footer-link-group>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <fwb-footer-copyright by="Flowbite™" href="/" />
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <fwb-footer-icon href="/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fill-rule="evenodd"
              />
            </svg>
          </fwb-footer-icon>
          <fwb-footer-icon href="/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 21 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              />
            </svg>
          </fwb-footer-icon>
          <fwb-footer-icon href="/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                fill-rule="evenodd"
              />
            </svg>
          </fwb-footer-icon>
          <fwb-footer-icon href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </fwb-footer-icon>
          <fwb-footer-icon href="https://t.me/@Sugonchi_jome_masjidi_rasmiy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="15.5"
              viewBox="0 0 496 512"
              class="text-white cursor-pointer"
            >
              <path
                d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
              />
            </svg>
          </fwb-footer-icon>
        </div>
      </div>
    </fwb-footer>
  </section>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from "flowbite-vue";
</script>

<style scoped>
:deep .footer {
  background: linear-gradient(180deg, rgb(1, 90, 1), #14c061) !important;
}
.diva {
  background: linear-gradient(180deg, rgb(1, 90, 1), #14c061) !important;
}
span {
  color: #fff;
}
svg {
  color: #fff !important;
}
</style>
