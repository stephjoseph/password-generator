<template>
  <div
    class="flex flex-col gap-4 w-full max-w-[343px] md:max-w-[540px] md:gap-8"
  >
    <h1
      class="font-['JetBrains_Mono'] text-base leading-[1.313rem] tracking-normal text-center text-[#817D92] md:text-[1.5rem] md:leading-[2rem]"
    >
      Password Generator
    </h1>
    <div class="flex flex-col w-full gap-4 md:gap-6">
      <div class="relative">
        <div
          class="w-full h-16 bg-dark-grey font-['JetBrains_Mono'] font-bold text-[1.5rem] leading-[1.938rem] tracking-normal p-4 pr-9 md:h-20 md:pl-6 md:py-5 md:text-[2rem] md:leading-[2.688rem] md:pr-[7.5rem]"
        >
          {{ state.password.value }}
        </div>
        <Transition name="fade">
          <button
            v-if="!copied"
            type="button"
            class="absolute w-8 h-8 flex items-center justify-center top-4 right-1 z-10 md:right-[18px] md:top-5 md:h-10 md:w-10"
            @click="copyPassword"
          >
            <div class="w-[1.313rem] h-[1.5rem] group md:w-6 md:h-8">
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
          <div
            v-else
            class="absolute w-8 h-8 flex items-center gap-2 justify-center top-4 right-1 z-10 md:right-[18px] md:top-5 md:h-10 md:w-[102px]"
          >
            <span class="font-body uppercase text-neon-green hidden md:block"
              >copied</span
            >
            <svg
              class="w-7 h-5 md:w-8 md:h-6"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.60659L5.39341 10L13.3934 2"
                stroke="#A4FFAF"
                stroke-width="3"
              />
            </svg>
          </div>
        </Transition>
      </div>

      <div class="w-full flex flex-col gap-8 bg-dark-grey p-4 md:px-8 md:py-6">
        <div class="flex flex-col w-full gap-2 md:gap-4">
          <div class="flex items-center justify-between">
            <label
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white md:text-[1.125rem] md:leading-6"
              >Character Length</label
            >
            <span class="font-heading-l text-neon-green">{{
              passwordLength
            }}</span>
          </div>
          <v-slider
            v-model="passwordLength"
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
        <div class="flex flex-col gap-4 md:gap-5">
          <div>
            <input
              v-model="state.includeUppercase.value"
              id="uppercase"
              type="checkbox"
              class="custom-checkbox"
            />
            <label
              for="uppercase"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10 md:text-[1.125rem] md:leading-6"
              >Include Uppercase Letters</label
            >
          </div>
          <div>
            <input
              v-model="state.includeLowercase.value"
              id="lowercase"
              type="checkbox"
              class="custom-checkbox"
            />
            <label
              for="lowercase"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10 md:text-[1.125rem] md:leading-6"
              >Include Lowercase Letters</label
            >
          </div>
          <div>
            <input
              v-model="state.includeNumbers.value"
              id="numbers"
              type="checkbox"
              class="custom-checkbox"
            />
            <label
              for="numbers"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10 md:text-[1.125rem] md:leading-6"
              >Include Numbers</label
            >
          </div>
          <div>
            <input
              v-model="state.includeSymbols.value"
              id="symbols"
              type="checkbox"
              class="custom-checkbox"
            />
            <label
              for="symbols"
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-almost-white pl-10 md:text-[1.125rem] md:leading-6"
              >Include Symbols</label
            >
          </div>
        </div>
        <div class="w-full flex flex-col gap-4">
          <div
            class="bg-very-dark-grey py-[0.875rem] px-[1rem] flex items-center justify-between md:px-8 md:py-6"
          >
            <h2
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-grey uppercase md:text-[1.125rem] md:leading-6"
            >
              Strength
            </h2>
            <div class="flex items-center gap-4">
              <span
                class="font-['JetBrains_Mono'] font-bold text-[1.125rem] leading-[1.438rem] tracking-normal text-almost-white uppercase md:text-[1.5rem] md:leading-[1.938rem]"
                >{{ passwordStrength }}</span
              >
              <div class="flex gap-2 w-16 h-[1.75rem]">
                <div
                  class="w-[0.625rem] h-[1.75rem] border-2 border-solid transition-colors duration-500"
                  :class="[
                    passwordStrength === 'Too Weak'
                      ? 'border-red bg-red'
                      : passwordStrength === 'Weak'
                      ? 'border-orange bg-orange'
                      : passwordStrength === 'Medium'
                      ? 'border-yellow bg-yellow'
                      : passwordStrength === 'Strong'
                      ? 'border-neon-green bg-neon-green'
                      : 'border-almost-white',
                  ]"
                ></div>
                <div
                  class="w-[0.625rem] h-[1.75rem] border-2 border-solid transition-colors duration-500"
                  :class="[
                    passwordStrength === 'Weak'
                      ? 'border-orange bg-orange'
                      : passwordStrength === 'Medium'
                      ? 'border-yellow bg-yellow'
                      : passwordStrength === 'Strong'
                      ? 'border-neon-green bg-neon-green'
                      : 'border-almost-white',
                  ]"
                ></div>
                <div
                  class="w-[0.625rem] h-[1.75rem] border-2 border-solid transition-colors duration-500"
                  :class="[
                    passwordStrength === 'Medium'
                      ? 'border-yellow bg-yellow'
                      : passwordStrength === 'Strong'
                      ? 'border-neon-green bg-neon-green'
                      : 'border-almost-white',
                  ]"
                ></div>
                <div
                  class="w-[0.625rem] h-[1.75rem] border-2 border-solid transition-colors duration-500"
                  :class="[
                    passwordStrength === 'Strong'
                      ? 'border-neon-green bg-neon-green'
                      : 'border-almost-white',
                  ]"
                ></div>
              </div>
            </div>
          </div>
          <button
            class="w-full h-14 bg-neon-green flex items-center justify-center gap-4 group hover:bg-transparent active:bg-transparent hover:border-2 hover:border-neon-green hover:border-solid active:border-2 active:border-neon-green active:border-solid transition-colors duration-300 md:h-16 md:gap-6"
            @click="generatePassword"
          >
            <span
              class="font-['JetBrains_Mono'] font-bold text-base leading-[1.313rem] tracking-normal text-dark-grey uppercase group-hover:text-neon-green group-active:text-neon-green transition-colors duration-300 md:text-[1.125rem] md:leading-6"
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
import { ref, computed } from 'vue';
export default {
  setup() {
    const passwordLength = ref(10);
    const state = {
      includeUppercase: ref(true),
      includeLowercase: ref(true),
      includeNumbers: ref(true),
      includeSymbols: ref(false),
      password: ref(''),
    };
    const copied = ref(false);

    const containsCharacterSets = (state) => {
      return (
        state.includeUppercase.value ||
        state.includeLowercase.value ||
        state.includeNumbers.value ||
        state.includeSymbols.value
      );
    };

    const countCharacterSets = (state) => {
      return [
        state.includeUppercase.value,
        state.includeLowercase.value,
        state.includeNumbers.value,
        state.includeSymbols.value,
      ].filter((value) => value).length;
    };

    const passwordStrength = computed(() => {
      if (passwordLength.value < 4 || !containsCharacterSets(state)) {
        return 'Too Weak';
      } else if (passwordLength.value < 8 || countCharacterSets(state) < 3) {
        return 'Weak';
      } else if (passwordLength.value < 12 || countCharacterSets(state) < 4) {
        return 'Medium';
      } else {
        return 'Strong';
      }
    });

    const generateCharacterSets = (state) => {
      const sets = [
        state.includeUppercase.value ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
        state.includeLowercase.value ? 'abcdefghijklmnopqrstuvwxyz' : '',
        state.includeNumbers.value ? '0123456789' : '',
        state.includeSymbols.value ? '!@#$%^&*()_+[]{}|;:,.<>?/' : '',
      ];
      return sets.join('');
    };

    const generatePassword = () => {
      const characters = generateCharacterSets(state);
      let password = '';
      if (characters) {
        for (let i = 0; i < passwordLength.value; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          password += characters[randomIndex];
        }
        state.password.value = password;
      } else {
        password = '';
        state.password.value = password;
      }
    };

    const copyPassword = async () => {
      const passwordToCopy = state.password.value;
      try {
        await navigator.clipboard.writeText(passwordToCopy);
        copied.value = true;

        setTimeout(() => {
          copied.value = false;
        }, 3000); // 3000 milliseconds (3 seconds)
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    // generate password on load
    generatePassword();

    return {
      state,
      passwordLength,
      passwordStrength,
      generatePassword,
      copied,
      copyPassword,
    };
  },
};
</script>

<style lang="scss">
// slider styles
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

// checkbox styles
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
  top: 2.5px;
  width: 20px;
  height: 20px;
  border: 2px solid #e6e5ea;
  background-color: transparent;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.custom-checkbox:checked + label::before {
  background: url('./assets/check.svg') #a4ffaf center/contain no-repeat;
  border-color: #a4ffaf;
}

// vue Transition styles
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
