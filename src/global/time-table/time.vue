<template>
  <div class="flex">
    <div class="flex flex-col mr-5 -mt-5">
      <label class="text-2xl text-[#db4444] font-semibold mb-2">Days</label>
      <input
        class="w-24 outline-none bg-[#ebe2e2ad] text-black px-4 py-2 text-xl rounded-sm"
        type="number"
        v-model="days"
        min="0"
        @input="resetCountdown"
      />
    </div>
    <div class="flex flex-col mr-5 -mt-5">
      <label class="text-2xl text-[#db4444] font-semibold mb-2">Hours</label>
      <input
        class="w-24 outline-none bg-[#ebe2e2ad] text-black px-4 py-2 text-xl rounded-sm"
        type="number"
        v-model="hours"
        min="0"
        max="23"
        @input="resetCountdown"
      />
    </div>
    <div class="flex flex-col mr-5 -mt-5">
      <label class="text-2xl text-[#db4444] font-semibold mb-2">Minutes</label>
      <input
        class="w-24 outline-none bg-[#ebe2e2ad] text-black px-4 py-2 text-xl rounded-sm"
        type="number"
        v-model="minutes"
        min="0"
        max="59"
        @input="resetCountdown"
      />
    </div>
    <div class="flex flex-col mr-5 -mt-5">
      <label class="text-2xl text-[#db4444] font-semibold mb-2">Seconds</label>
      <input
        class="w-24 outline-none bg-[#ebe2e2ad] text-black px-4 py-2 text-xl rounded-sm"
        type="number"
        v-model="seconds"
        min="0"
        max="59"
        @input="resetCountdown"
      />
    </div>
    <button
      class="bg-green-500 text-white font-semibold text-lg outline-none border border-black h-10 px-2 py-1 rounded-lg mt-3 ml-5"
      @click="startCountdownAndEmit"
    >
      Countdown
    </button>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";

export default {
  name: "TimeTable",
  emits: ["countdown-started"],
  setup(_, { emit }) {
    // Create a ref for the countdown
    const countdown = ref("");
    // Create refs for the duration values
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    // Create a ref for the interval ID
    const intervalId = ref(null);

    // Function to update the countdown
    const updateCountdown = () => {
      if (
        days.value === 0 &&
        hours.value === 0 &&
        minutes.value === 0 &&
        seconds.value === 0
      ) {
        countdown.value = "0 : 0 : 0 : 0";
        clearInterval(intervalId.value);
        return;
      }

      countdown.value = `${days.value} : ${hours.value} : ${minutes.value} : ${seconds.value}`;

      // Decrease the duration values
      if (seconds.value > 0) {
        seconds.value--;
      } else if (minutes.value > 0) {
        minutes.value--;
        seconds.value = 59;
      } else if (hours.value > 0) {
        hours.value--;
        minutes.value = 59;
        seconds.value = 59;
      } else if (days.value > 0) {
        days.value--;
        hours.value = 23;
        minutes.value = 59;
        seconds.value = 59;
      }
    };

    // Function to start the countdown
    const startCountdown = () => {
      clearInterval(intervalId.value);
      intervalId.value = setInterval(updateCountdown, 1000);
    };

    // Function to reset the countdown
    const resetCountdown = () => {
      clearInterval(intervalId.value);
      countdown.value = "";
    };

    // Call the updateCountdown function immediately when the component is mounted
    onMounted(() => {
      updateCountdown();
    });

    const startCountdownAndEmit = () => {
      startCountdown();
      emit("countdown-started", countdown.value);
    };

    // Compute the formatted countdown
    const formattedCountdown = computed(() => {
      const formattedDays = String(days.value).padStart(2, "0");
      const formattedHours = String(hours.value).padStart(2, "0");
      const formattedMinutes = String(minutes.value).padStart(2, "0");
      const formattedSeconds = String(seconds.value).padStart(2, "0");

      return `${formattedDays} : ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    });

    return {
      countdown,
      days,
      hours,
      minutes,
      seconds,
      startCountdown,
      resetCountdown,
      startCountdownAndEmit,
      formattedCountdown,
    };
  },
};
</script>
