<template>
  <div class="mt-8">
    <div class="mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white lg:relative" style="box-shadow: 0px 20px 33px #00000029; min-height: 1300px">
      <div class="justify-between lg:absolute lg:top-2 lg:right-4 lg:flex lg:gap-4">
        <div class="relative">
          <input type="text" v-model="searchKeyword" class="block mt-4 rounded bg-blue-100 px-4 lg:pl-10 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Search...">
          <svg class="absolute top-2 left-4 lg:top-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z" fill="#2E3A59"></path>
          </svg>
        </div>
        <div class="items-center flex text-sm mt-4 relative border border-solid border-blue-500 rounded">
          <svg class="cursor-pointer" @click="val = ''" v-if="filtered" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="red" d="M8.41417 0.414185L6.99995 1.8284L8.17162 3.00006H4C3.447 3.00006 3 3.44706 3 4.00006V6.59006C3 7.11306 3.213 7.62706 3.583 7.99706L9 13.4141L9 21.0001C9 21.3471 9.18 21.6681 9.475 21.8511C9.635 21.9501 9.817 22.0001 10 22.0001C10.153 22.0001 10.306 21.9651 10.447 21.8951L14.447 19.8951C14.786 19.7251 15 19.3791 15 19.0001L15 13.4141L16.7928 11.6213L19.7279 14.5563L21.1421 13.1421L8.41417 0.414185ZM15.3788 10.2073L13.293 12.2931C13.105 12.4801 13 12.7341 13 13.0001L13 18.3821L11 19.3821V13.0001C11 12.7341 10.895 12.48 10.707 12.2931L5 6.59006V5.00006L10.1716 5.00006L15.3788 10.2073Z" ></path>
            <path fill="red" d="M20 3.00006H13.8284L15.8284 5.00006H19.001L19.003 6.58306L18.2072 7.37885L19.6212 8.79285L20.417 7.99706C20.787 7.62706 21 7.11306 21 6.59006V4.00006C21 3.44706 20.553 3.00006 20 3.00006Z" ></path>
          </svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M20 3H4C3.447 3 3 3.447 3 4V6.59C3 7.113 3.213 7.627 3.583 7.997L9 13.414V21C9 21.347 9.18 21.668 9.475 21.851C9.635 21.95 9.817 22 10 22C10.153 22 10.306 21.965 10.447 21.895L14.447 19.895C14.786 19.725 15 19.379 15 19V13.414L20.417 7.997C20.787 7.627 21 7.113 21 6.59V4C21 3.447 20.553 3 20 3ZM13.293 12.293C13.105 12.48 13 12.734 13 13V18.382L11 19.382V13C11 12.734 10.895 12.48 10.707 12.293L5 6.59V5H19.001L19.003 6.583L13.293 12.293Z" fill="#2E3A59"></path>
          </svg>
          <button @click="showFilter = !showFilter" class="py-2 px-2 text-blue-700">Filter by
            <font-awesome-icon icon="angle-down" class="ml-2"/>
          </button>
          <div v-if="showFilter" class="filter shadow-lg absolute left-0 bg-white rounded-lg p-4 mt-2">
            <p class="mb-2 cursor-pointer text-sm text-blue-600 hover:text-blue-800" @click="filterByPolicyType('Health')">Health</p>
            <p class="mb-2 cursor-pointer text-sm text-blue-600 hover:text-blue-800" @click="filterByPolicyType('Vehicle')">Vehicle</p>
            <p class="mb-2 cursor-pointer text-sm text-blue-600 hover:text-blue-800" @click="filterByPolicyType('Home-content')">Home-content</p>
            <p class="mb-2 cursor-pointer text-sm text-blue-600 hover:text-blue-800" @click="filterByPolicyType('Gadget')">Gadget</p>
          </div> 
        </div>
      </div>
      <div class="mt-4 lg:mt-0 flex items-end">
      </div>
      <div class="overflow-x-auto xl:overflow-x-hidden tablecont">
        <table v-if="filteredPolicies.length > 0" class="w-full mt-8">
          <thead>
            <tr>
              <th class="font-bold text-left py-2 px-4 bg-blue-50">S/N</th>  
              <th class="font-bold text-left py-2 px-4 bg-blue-50">Firstname</th>
              <th class="font-bold text-left py-2 px-4 bg-blue-50">Lastname</th>
              <th class="font-bold text-left py-2 px-4 bg-blue-50">Plan</th>
              <th class="font-bold text-left py-2 px-4 bg-blue-50">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(policy, index) in filteredPolicies" :key="index" class="border border-solid border-gray-300">
              <td class="py-2 px-4">{{index + 1}}</td>
              <td class="py-2 px-4">{{policy.enrollee.firstname}}</td>
              <td class="py-2 px-4">{{policy.enrollee.lastname}}</td>
              <td class="py-2 px-4">{{policy.HealthPlan.name}}</td>
              <td class="py-2 px-4">
                <span v-if="policy.Status.name== 'Success'" class="rounded text-white text-center py-1 px-2 bg-green-500"> {{policy.Status.name}}</span>
                <span v-else-if="policy.Status.name== ''" class="rounded text-white text-center py-1 px-2"> </span>
                <span v-else-if="policy.Status.name == 'Active'" class="rounded text-white text-center py-1 px-2 bg-blue-500"> {{policy.Status.name}}</span>
                <span v-else-if="policy.Status.name == 'Suspended'" class="rounded text-white text-center py-1 px-2 bg-orange-500"> {{policy.Status.name}}</span>
                <span v-else-if="policy.Status.name == 'Expired'" class="rounded text-white text-center py-1 px-2 bg-red-500"> {{policy.Status.name}}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="flex items-center justify-center h-48">
          <p class="text-gray-500">No policies found for the selected filter.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchKeyword: '',
      showFilter: false,
      val: '',
      policies: [
        { enrollee: { firstname: 'John', lastname: 'Doe' }, HealthPlan: { name: 'Plan A' }, Status: { name: 'Success' }, policyType: 'Health' },
        { enrollee: { firstname: 'Jane', lastname: 'Smith' }, HealthPlan: { name: 'Plan B' }, Status: { name: 'Active' }, policyType: 'Vehicle' },
        { enrollee: { firstname: 'Michael', lastname: 'Johnson' }, HealthPlan: { name: 'Plan C' }, Status: { name: 'Suspended' }, policyType: 'Home-content' },
        { enrollee: { firstname: 'Emily', lastname: 'Williams' }, HealthPlan: { name: 'Plan D' }, Status: { name: 'Expired' }, policyType: 'Gadget' },
      ],
    };
  },
  computed: {
    filteredPolicies() {
      return this.$store.getters.filteredPolicies(this.val, this.searchKeyword);
    },
    filtered() {
      return this.val !== '';
    }
  },
  methods: {
    filterByPolicyType(policyType) {
      this.val = policyType;
      this.showFilter = false;
    },
  },
};
</script>

<style scoped>
.tablecont {
  min-width: 768px;
}
.filter {
  min-width: 150px;
  padding: 16px;
}
</style>
