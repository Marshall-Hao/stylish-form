<template>
    <form class="justify-self-center px-20 py-10 bg-white w-3/5 mx-auto my-10 space-y-7 rounded-xl shadow-lg">
        <label class="block text-gray-400 text-sm tracking-wider font-semibold">Email:</label>
        <input v-model="email" class="block border-b w-full text-gray-400 text-sm tracking-wider font-medium focus:outline-none" type="email" required>

        <label class="block text-gray-400 text-sm tracking-wider font-semibold">Password:</label>
        <input v-model="password" class="block border-b w-full text-gray-400 text-sm tracking-wider font-medium focus:outline-none" type="password" required>

        <label class="block text-gray-400 text-sm tracking-wider font-semibold">Role:</label>
        <select v-model="role" class="block border-b w-full text-gray-400 text-sm tracking-wider font-medium focus:outline-none">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label class="block text-gray-400 text-sm tracking-wider font-semibold">Skills:</label>
        <input @keyup.enter="addSkill" type="text" class="block border-b w-full text-gray-400 text-sm tracking-wider font-medium focus:outline-none" v-model="tempSkill">
        

        <div @dblclick="deleteSkill(skill)" class="inline-block mr-1 px-3 py-1 bg-gray-300 text-gray-400 hover:bg-gray-100 hover:text-gray-200 rounded-3xl text-center" v-for="skill in skills" :key="skill">
           #{{ skill }}
        </div>

        <div class="block space-x-4 text-gray-400 text-sm tracking-wider font-semibold flex items-center">
            <input v-model="terms" class="inline-block form-checkbox" type="checkbox" required>
            <label class="inline-block ">Accept terms and condition</label>
        </div>

    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false,
            tempSkill: '',
            skills: []
        }
    },
    methods: {
        addSkill() {
            if (this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
           this.skills = this.skills.filter((item) => {
               return skill !== item
           })
        }
    },
}
</script>