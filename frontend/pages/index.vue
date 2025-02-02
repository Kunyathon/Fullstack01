<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';

const authStore = useAuthStore();
const store = useProfileStore();

useHead({
    title: "Kunyathon 's portfolios",
    meta: [{ name: "description", content: "Kunyathon 's portfolios" }],
    //   bodyAttrs: {
    //     class: 'test'
    //   },
    //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
});

const limit = 2;
const currentPortfoliosPage = ref(1);

await store.getProfile();

await store.getPortfolios(currentPortfoliosPage.value, limit);

const onPortfoliosMore = async () => {
    const nextPage = currentPortfoliosPage.value + 1;

    await store.getPortfolios(nextPage, limit);

    currentPortfoliosPage.value = nextPage;
}
</script>

<template>
    <section>
        <section class="mb-10">
             <BaseEditable :edit-mode="store.skillsEditMode">
            <template #view>
                <SkillList
                    :skills="store.profile.overallSkills"
                    :can-edit="authStore.canEdit"
                    @edit="store.enterSkillsEditMode"
                />
            </template>
            <template #edit>
                <SkillForm
                    :skills="store.profile.overallSkills"
                    @cancel="store.enterSkillsViewMode"
                    @submit="store.saveSkills"
                />
            </template>
        </BaseEditable>
        </section>

        <section class="mb-10">
            <BaseEditable :edit-mode="store.experiencesEditMode">
            <template #view>
                <ExperienceList
                    :experiences="store.profile.experiences"
                    :can-edit="authStore.canEdit"
                    :has-more-experiences="store.hasMoreExperiences"
                    :is-experience-visible="store.isExperienceVisible"
                    @edit="store.enterExperiencesEditMode"
                    @more="store.increaseVisibleExperences(8)"
                />
            </template>
            <template #edit>
                <ExperienceForm
                    :experiences="store.profile.experiences"
                    @cancel="store.enterExperiencesViewMode"
                    @submit="store.saveExperiences"
                />
            </template>
        </BaseEditable>
        </section>

        <section>
              <PortfolioList
            :portfolios="store.portfolios"
            :can-edit="authStore.canEdit"
            :is-getting-portfolios="store.isGettingPortfolios"
            :has-more-portfolios="store.hasMorePortfolios"
            @more="onPortfoliosMore"
        />
        </section>

    </section>
</template>

