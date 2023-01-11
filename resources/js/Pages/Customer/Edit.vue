<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/inertia-vue3';
import BreezeButton from "@/Components/PrimaryButton.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    customer: {
        type: Object,
        default: () => ({}),
    },
});

const form = useForm({
    id: props.customer.id,
    first_name: props.customer.first_name,
    last_name: props.customer.last_name,
    age: props.customer.age,
});


const submit = () => {
    form.put(route("customers.update", props.customer.id));
};
</script>

<template>
    <Head title="Customer Edit" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                Customer Edit
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <div class="mb-6">
                                <label
                                    for="First Name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >First Name</label
                                >
                                <input
                                    type="text"
                                    v-model="form.first_name"
                                    name="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                                <div
                                    v-if="form.errors.first_name"
                                    class="text-sm text-red-600"
                                >
                                    {{ form.errors.first_name }}
                                </div>
                            </div>
                            <div class="mb-6">
                                <label
                                    for="Last Name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Last Name</label
                                >
                                <input
                                    type="text"
                                    v-model="form.last_name"
                                    name="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                                <div
                                    v-if="form.errors.last_name"
                                    class="text-sm text-red-600"
                                >
                                    {{ form.errors.last_name }}
                                </div>
                            </div>
                            <div class="mb-6">
                                <label
                                    for="Age"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Age</label
                                >
                                <textarea
                                    type="text"
                                    v-model="form.age"
                                    name="age"
                                    id=""
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                ></textarea>

                                <div
                                    v-if="form.errors.age"
                                    class="text-sm text-red-600"
                                >
                                    {{ form.errors.age }}
                                </div>
                            </div>
                            <button
                                type="submit"
                                class="text-white bg-blue-700  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 "
                                :disabled="form.processing"
                                :class="{ 'opacity-25': form.processing }"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>