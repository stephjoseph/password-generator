<template>
  <div class="flex flex-col gap-4 w-full max-w-[343px]">
    <h1
      class="font-['JetBrains_Mono'] text-base leading-[1.313rem] tracking-normal text-center text-[#817D92]"
    >
      Password Generator
    </h1>
    <div class="flex flex-col w-full gap-4">
      <div class="relative">
        <input
          type="text"
          class="w-full h-16 bg-dark-grey font-['JetBrains_Mono'] font-bold text-[1.5rem] leading-[1.938rem] tracking-normal p-4 focus:outline-none caret-neon-green pr-[3.25rem]"
        />
        <button
          type="button"
          class="absolute w-8 h-8 flex items-center justify-center top-4 right-[10px] z-10"
        >
          <div class="w-[1.313rem] h-[1.5rem] group">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-almost-white group-active:fill-almost-white transition-colors duration-300"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.909 0.659016L20.341 3.09098C20.763 3.51294 21 4.08523 21 4.68197V17.25C21 18.4926 19.9926 19.5 18.75 19.5H15V21.75C15 22.9926 13.9926 24 12.75 24H2.25C1.00734 24 0 22.9926 0 21.75V6.75C0 5.50734 1.00734 4.5 2.25 4.5H6V2.25C6 1.00734 7.00734 0 8.25 0H16.3181C16.9147 3.12036e-06 17.4871 0.237058 17.909 0.659016ZM2.53126 21.75H12.4687C12.5434 21.75 12.6149 21.7204 12.6677 21.6677C12.7204 21.6149 12.75 21.5434 12.75 21.4687V19.5H8.25C7.00734 19.5 6 18.4926 6 17.25V6.75H2.53126C2.45665 6.75 2.38512 6.77963 2.33238 6.83238C2.27963 6.88512 2.25 6.95665 2.25 7.03126V21.4687C2.25 21.5434 2.27963 21.6149 2.33238 21.6677C2.38512 21.7204 2.45665 21.75 2.53126 21.75ZM18.4687 17.25H8.53126C8.45665 17.25 8.38512 17.2204 8.33238 17.1677C8.27963 17.1149 8.25 17.0434 8.25 16.9687V2.53126C8.25 2.45665 8.27963 2.38512 8.33238 2.33238C8.38512 2.27963 8.45665 2.25 8.53126 2.25H13.5V6.375C13.5 6.99632 14.0036 7.5 14.625 7.5H18.75V16.9687C18.75 17.0434 18.7204 17.1149 18.6677 17.1677C18.6149 17.2204 18.5434 17.25 18.4687 17.25ZM15.75 5.25H18.75V4.7985C18.75 4.76156 18.7427 4.72499 18.7286 4.69086C18.7145 4.65673 18.6937 4.62572 18.6677 4.59961L16.4004 2.33236C16.3476 2.27963 16.2761 2.25 16.2014 2.25H15.75V5.25Z"
                fill="#A4FFAF"
              />
            </svg>
          </div>
        </button>
      </div>

      <div class="w-full flex flex-col gap-8 bg-dark-grey p-4">
        <div class="flex flex-col w-full gap-2">
          <div class="flex items-center justify-between">
            <label
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white"
              >Character Length</label
            >
            <span class="font-heading-l text-neon-green">{{ slider }}</span>
          </div>
          <v-slider
            v-model="slider"
            color="#A4FFAF"
            track-color="#18171F"
            thumb-color="#E6E5EA"
            :thumb-size="28"
            :track-size="6"
            :min="1"
            :max="20"
            :step="1"
          ></v-slider>
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <input type="checkbox" checked class="custom-checkbox" />
            <label
              for="uppercase"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10"
              >Include Uppercase Letters</label
            >
          </div>
          <div>
            <input type="checkbox" class="custom-checkbox" />
            <label
              for="lowercase"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10"
              >Include Lowercase Letters</label
            >
          </div>
          <div>
            <input type="checkbox" class="custom-checkbox" />
            <label
              for="numbers"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10"
              >Include Numbers</label
            >
          </div>
          <div>
            <input type="checkbox" class="custom-checkbox" />
            <label
              for="symbols"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10"
              >Include Symbols</label
            >
          </div>
        </div>
        <div class="w-full flex flex-col gap-4">
          <div
            class="bg-very-dark-grey py-[0.875rem] px-4 flex items-center justify-between"
          >
            <h2
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-grey uppercase"
            >
              Strength
            </h2>
            <div class="flex items-center gap-4">
              <span class="font-body text-almost-white uppercase">Medium</span>
              <div class="flex gap-2 w-16 h-[1.75rem]">
                <div
                  class="w-[0.625rem] h-[1.75rem] ring-2 ring-almost-white ring-inset"
                ></div>
                <div
                  class="w-[0.625rem] h-[1.75rem] ring-2 ring-almost-white ring-inset"
                ></div>
                <div
                  class="w-[0.625rem] h-[1.75rem] ring-2 ring-almost-white ring-inset"
                ></div>
                <div
                  class="w-[0.625rem] h-[1.75rem] ring-2 ring-almost-white ring-inset"
                ></div>
              </div>
            </div>
          </div>
          <button
            class="w-full h-14 bg-neon-green flex items-center justify-center gap-4 group hover:bg-transparent hover:border-2 hover:border-neon-green hover:border-solid transition-colors duration-300"
          >
            <span
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-dark-grey uppercase group-hover:text-neon-green group-active:text-neon-green transition-colors duration-300"
              >Generate</span
            >
            <div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="group-hover:fill-neon-green group-active:fill-neon-green transition-colors duration-300"
                  d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
                  fill="#24232C"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: 10,
    };
  },
};
</script>

<style lang="scss">
.v-slider-track {
  border-radius: 0px !important;
}

.v-input {
  &__details {
    display: none !important;
  }

  &__control {
    min-height: 28px !important;
  }
}

/* Style for custom checkboxes */
.custom-checkbox {
  display: none;
}

.custom-checkbox + label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
}

.custom-checkbox + label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.custom-checkbox:checked + label::before {
  background: url('./assets/check.svg') #a4ffaf center/contain no-repeat;
  border: none;
}
</style>
