<script setup>
import moment from 'moment';

const props = defineProps({
    experience: Object,
});

//computed คล้ายๆกับ usecallback
const experienceType = computed(() => useExperienceType(props.experience.type));

const start = computed(() => moment(props.experience.start).format('MMM YYYY'))
const end = computed(() => props.experience.end ? moment(props.experience.end).format('MMM YYYY') : 'Present')
const diff = computed(() => {
    const { diffInYear, diffInMonth } = useDateRangeDiff(props.experience.start, props.experience.end);

    if (diffInYear > 1) {
        return `${diffInYear} year(s)`;
    }

    return `${diffInMonth} month(s)`;

})
</script>

<template>
    <div class="md:flex md:space-x-2">
        <div class="flex space-x-3 md:flex-1">
            <div>
                <BaseImage
                    :url="experience.logo"
                    class="w-10 h-10 rounded-md"
                />
            </div>
            <div class="text-sm flex-1 md:text-base">
                <h3 class="text-white font-bold text-base md:text-lg">
                    {{ experience.title }}
                </h3>
                <div>

                    <span class="text-white">{{ experience.company }}</span>
                    <span class="text-white"> · </span>
                    <span class="text-white">{{ experienceType }}</span>
                </div>
                <div>
                    <span class="text-white">
                        {{ start }} - {{ end }} · {{ diff }}</span>
                </div>

                <div class="py-3 md:hidden">
                    <p class="text-white whitespace-pre-wrap">{{ experience.detail }}</p>
                </div>
                <BaseBadgeList :badges="experience.skills" />
            </div>
        </div>
        <div class="hidden md:block md:flex-1">
            <p class="text-white whitespace-pre-wrap">{{ experience.detail }}</p>
        </div>
    </div>
</template>