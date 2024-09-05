<template>
<div class="flex flex-col space-y-4 w-full bg-grey px-16 py-5">
    <div class="flex justify-between items-center w-full pl-7 pr-9"> 
        <div class="flex flex-col w-full">
            <div class="flex flex-col items-start justify-start">
               <h1 class="text-start text-3xl font-bold  text-bigtext pt-10">Our Testimonials</h1> 
               <h1 class="text-start text-texter text-sm font-thin">Dive into the collections of testimonials that speak to the impact of Pixels and Brands. Our clients share their journey, highlighting the excellence, reliability and transformative experience they’ve encountered working with us.</h1>
            </div>
          
        </div>
    </div>
    <div class="flex flex-col items-start w-ful space-y-6" v-for="(testimonial,index) in paginatedTestimonials" :key="index">
        <div class="flex flex-row justify-between items-center space-x-5 p-6">
            <div class="flex flex-col space-y-3 bg-white p-7 rounded-lg shadow-md">
                <div class="flex items-start p-4"><svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 0L8 10.6667H16V26.6667H0V10.6667L5.33333 0H13.3333ZM34.6667 0L29.3333 10.6667H37.3333V26.6667H21.3333V10.6667L26.6667 0H34.6667Z" fill="#0E113E"/>
                    </svg></div>
                    <h1>Lorem ipsum dolor sit amet consectetur. Cursus luctus sed ipsum risus rhoncus nisl imperdiet mi pretium. Sem molestie ultrices odio egestas sed mauris cursus. Odio in tellus pharetra lectus. Adip</h1>
                    <div class="flex flex-row justify-between items-center gap-2">
                        <div>
                            {{ testimonial.image }}
                        </div>
                        <div class="flex flex-col space-y-2 p-2">
                            <h1 class="text-sm font-bold text-black">{{testimonial.name}}</h1>
                            <h1 class="text-sm font-bold text-texter"> {{testimonial.position}}</h1>
                        </div>
                        <div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4491 21.1164H16.8931V15.5473C16.8931 14.2192 16.8694 12.5097 15.0436 12.5097C13.1915 12.5097 12.9081 13.9566 12.9081 15.4506V21.116H9.35203V9.66364H12.7658V11.2287H12.8136C13.1553 10.6446 13.649 10.164 14.2421 9.83824C14.8352 9.51247 15.5056 9.35368 16.1819 9.37878C19.7861 9.37878 20.4506 11.7496 20.4506 14.8338L20.4491 21.1164ZM5.33963 8.09819C4.93148 8.09826 4.53247 7.9773 4.19307 7.7506C3.85367 7.5239 3.58913 7.20164 3.43287 6.82458C3.27661 6.44752 3.23566 6.03258 3.31521 5.63225C3.39477 5.23192 3.59125 4.86417 3.8798 4.57551C4.16835 4.28685 4.53602 4.09023 4.93631 4.01053C5.3366 3.93083 5.75152 3.97163 6.12863 4.12775C6.50573 4.28388 6.82807 4.54833 7.05489 4.88766C7.2817 5.22699 7.40281 5.62597 7.40288 6.03413C7.40293 6.30513 7.34959 6.5735 7.24593 6.82389C7.14227 7.07429 6.99032 7.30182 6.79873 7.49348C6.60714 7.68515 6.37966 7.8372 6.12931 7.94096C5.87895 8.04471 5.61063 8.09814 5.33963 8.09819ZM7.11765 21.1164H3.5579V9.66364H7.11765V21.1164ZM22.222 0.668383H1.77099C1.30681 0.663145 0.859518 0.842412 0.52744 1.16679C0.195362 1.49117 0.00566506 1.93412 0 2.39831V22.9348C0.00547117 23.3993 0.195057 23.8425 0.527123 24.1672C0.85919 24.4919 1.30658 24.6715 1.77099 24.6666H22.222C22.6873 24.6724 23.1359 24.4933 23.4693 24.1686C23.8027 23.8439 23.9936 23.4002 24 22.9348V2.39683C23.9934 1.93172 23.8024 1.48826 23.469 1.16389C23.1356 0.839521 22.6871 0.660767 22.222 0.666901" fill="#747694"/>
                                </svg>
                                
                        </div>
                    </div>
            </div>
           
            <div class="flex flex-col space-y-3 bg-white p-7 rounded-lg shadow-md">
                <div class="flex items-start p-4"><svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 0L8 10.6667H16V26.6667H0V10.6667L5.33333 0H13.3333ZM34.6667 0L29.3333 10.6667H37.3333V26.6667H21.3333V10.6667L26.6667 0H34.6667Z" fill="#0E113E"/>
                    </svg></div>
                    <h1>Lorem ipsum dolor sit amet consectetur. Cursus luctus sed ipsum risus rhoncus nisl imperdiet mi pretium. Sem molestie ultrices odio egestas sed mauris cursus. Odio in tellus pharetra lectus. Adip</h1>
                    <div class="flex flex-row justify-between items-center gap-2">
                        <div>
                            <img src="../../../public/images/Ellipse 1.png" alt="testimony1" >
                        </div>
                        <div class="flex flex-col space-y-2 p-2">
                            <h1 class="text-sm font-bold text-black">Thomas Edison</h1>
                            <h1 class="text-sm font-bold text-texter"> CEO OF GIVANA</h1>
                        </div>
                        <div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4491 21.1164H16.8931V15.5473C16.8931 14.2192 16.8694 12.5097 15.0436 12.5097C13.1915 12.5097 12.9081 13.9566 12.9081 15.4506V21.116H9.35203V9.66364H12.7658V11.2287H12.8136C13.1553 10.6446 13.649 10.164 14.2421 9.83824C14.8352 9.51247 15.5056 9.35368 16.1819 9.37878C19.7861 9.37878 20.4506 11.7496 20.4506 14.8338L20.4491 21.1164ZM5.33963 8.09819C4.93148 8.09826 4.53247 7.9773 4.19307 7.7506C3.85367 7.5239 3.58913 7.20164 3.43287 6.82458C3.27661 6.44752 3.23566 6.03258 3.31521 5.63225C3.39477 5.23192 3.59125 4.86417 3.8798 4.57551C4.16835 4.28685 4.53602 4.09023 4.93631 4.01053C5.3366 3.93083 5.75152 3.97163 6.12863 4.12775C6.50573 4.28388 6.82807 4.54833 7.05489 4.88766C7.2817 5.22699 7.40281 5.62597 7.40288 6.03413C7.40293 6.30513 7.34959 6.5735 7.24593 6.82389C7.14227 7.07429 6.99032 7.30182 6.79873 7.49348C6.60714 7.68515 6.37966 7.8372 6.12931 7.94096C5.87895 8.04471 5.61063 8.09814 5.33963 8.09819ZM7.11765 21.1164H3.5579V9.66364H7.11765V21.1164ZM22.222 0.668383H1.77099C1.30681 0.663145 0.859518 0.842412 0.52744 1.16679C0.195362 1.49117 0.00566506 1.93412 0 2.39831V22.9348C0.00547117 23.3993 0.195057 23.8425 0.527123 24.1672C0.85919 24.4919 1.30658 24.6715 1.77099 24.6666H22.222C22.6873 24.6724 23.1359 24.4933 23.4693 24.1686C23.8027 23.8439 23.9936 23.4002 24 22.9348V2.39683C23.9934 1.93172 23.8024 1.48826 23.469 1.16389C23.1356 0.839521 22.6871 0.660767 22.222 0.666901" fill="#747694"/>
                                </svg>
                                
                        </div>
                    </div>
            </div>
            <div class="flex flex-col space-y-3 bg-white p-7 rounded-lg shadow-md">
                <div class="flex items-start p-4"><svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 0L8 10.6667H16V26.6667H0V10.6667L5.33333 0H13.3333ZM34.6667 0L29.3333 10.6667H37.3333V26.6667H21.3333V10.6667L26.6667 0H34.6667Z" fill="#0E113E"/>
                    </svg></div>
                    <h1>Lorem ipsum dolor sit amet consectetur. Cursus luctus sed ipsum risus rhoncus nisl imperdiet mi pretium. Sem molestie ultrices odio egestas sed mauris cursus. Odio in tellus pharetra lectus. Adip</h1>
                    <div class="flex flex-row justify-between items-center gap-2">
                        <div>
                            <img src="../../../public/images/Ellipse 1.png" alt="testimony1" >
                        </div>
                        <div class="flex flex-col space-y-2 p-2">
                            <h1 class="text-sm font-bold text-black">Thomas Edison</h1>
                            <h1 class="text-sm font-bold text-texter"> CEO OF GIVANA</h1>
                        </div>
                        <div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4491 21.1164H16.8931V15.5473C16.8931 14.2192 16.8694 12.5097 15.0436 12.5097C13.1915 12.5097 12.9081 13.9566 12.9081 15.4506V21.116H9.35203V9.66364H12.7658V11.2287H12.8136C13.1553 10.6446 13.649 10.164 14.2421 9.83824C14.8352 9.51247 15.5056 9.35368 16.1819 9.37878C19.7861 9.37878 20.4506 11.7496 20.4506 14.8338L20.4491 21.1164ZM5.33963 8.09819C4.93148 8.09826 4.53247 7.9773 4.19307 7.7506C3.85367 7.5239 3.58913 7.20164 3.43287 6.82458C3.27661 6.44752 3.23566 6.03258 3.31521 5.63225C3.39477 5.23192 3.59125 4.86417 3.8798 4.57551C4.16835 4.28685 4.53602 4.09023 4.93631 4.01053C5.3366 3.93083 5.75152 3.97163 6.12863 4.12775C6.50573 4.28388 6.82807 4.54833 7.05489 4.88766C7.2817 5.22699 7.40281 5.62597 7.40288 6.03413C7.40293 6.30513 7.34959 6.5735 7.24593 6.82389C7.14227 7.07429 6.99032 7.30182 6.79873 7.49348C6.60714 7.68515 6.37966 7.8372 6.12931 7.94096C5.87895 8.04471 5.61063 8.09814 5.33963 8.09819ZM7.11765 21.1164H3.5579V9.66364H7.11765V21.1164ZM22.222 0.668383H1.77099C1.30681 0.663145 0.859518 0.842412 0.52744 1.16679C0.195362 1.49117 0.00566506 1.93412 0 2.39831V22.9348C0.00547117 23.3993 0.195057 23.8425 0.527123 24.1672C0.85919 24.4919 1.30658 24.6715 1.77099 24.6666H22.222C22.6873 24.6724 23.1359 24.4933 23.4693 24.1686C23.8027 23.8439 23.9936 23.4002 24 22.9348V2.39683C23.9934 1.93172 23.8024 1.48826 23.469 1.16389C23.1356 0.839521 22.6871 0.660767 22.222 0.666901" fill="#747694"/>
                                </svg>
                                
                        </div>
                    </div>
            </div>
        </div>
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row">
                1/5
            </div>
            <div class="flex flex-row justify-center">
                <div>A</div>
                <div>........</div>
                <div>A</div>
            </div>
        </div>
    </div>
    <div>

    </div>

</div>
</template>
<script>
export default{
    data() {
    return {
      currentPage: 1,
      itemsPerPage: 3,
      testimonials: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur...',
          name: 'Thomas Edison',
          position: 'CEO OF GIVANA',
          image: '../../../public/images/Ellipse 1.png'
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur...',
          name: 'Thomas Edison',
          position: 'CEO OF GIVANA',
          image: '../../../public/images/Ellipse 1.png'
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur...',
          name: 'Thomas Edison',
          position: 'CEO OF GIVANA',
          image: '../../../public/images/Ellipse 1.png'
        },
        // Add more testimonials here
      ]
    };
  },
    computed: {
    paginatedTestimonials() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.testimonials.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.testimonials.length / this.itemsPerPage);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
}
</script>
<style>

</style>