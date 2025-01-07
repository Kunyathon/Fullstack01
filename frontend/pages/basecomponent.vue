<script setup lang="ts">

const experience = {
  logo: "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
  title: "Senior Engineering Manager",
  company: "Senestia",
  type: "fulltime",
  start: "2023-08-01T00:00:00.000+07:00",
  end: null,
  skills: ["Management"],
  detail: "- Manage the 6-8 engineers",
};

const experiences = [
  {
    logo: "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
    title: "Senior Engineering Manager",
    company: "Senestia",
    type: "fulltime",
    start: "2023-08-01T00:00:00.000+07:00",
    end: null,
    skills: ["Management"],
    detail: "- Manage the 6-8 engineers",
  },
  {
    logo: "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
    title: "Senior Engineering Manager",
    company: "Senestia",
    type: "fulltime",
    start: "2023-08-01T00:00:00.000+07:00",
    end: null,
    skills: ["Management"],
    detail: "- Manage the 6-8 engineers",
  },
];

function isExperienceVisible(index: any) {
  return true;
}

const portfolios = [
    {
        "id": "507f191e810c19729de860ea",
        "cover": "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png",
        "images": [
            "https://cdn-images-1.medium.com/v2/resize:fit:400/1*r5OuqrQCyLCf11ecU1ccjA@2x.png"
        ],
        "skills": [
            "Management"
        ],
        "title": "Do something",
        "content": "Do something",
        "excerpt": "Do something",
        "publishedAt": "2023-08-01T00:00:00.000+07:00"
    }
];


</script>

<template>
  <p class="font-bold text-xl text-center">Basic Component</p>

  <section class="mb-10">
    <p class="font-bold text-lg">BaseBadgeItem</p>
    <BaseBadgeItem>Hello</BaseBadgeItem>
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">BaseBadgeList</p>
    <BaseBadgeList :badges="['a', 'b']" />
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">BaseButton</p>
    <BaseButton size="small">Hell</BaseButton>
    <BaseButton size="large" class="m-3">Hell</BaseButton>
    <BaseButton>Hell</BaseButton>
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">BaseLink</p>
    <BaseLink to="" class="inline-block">Go to home</BaseLink>
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">Icon</p>
    <BaseButton size="small">
      <IconUser class="inline-block w-5"></IconUser>
      <span>User</span>
    </BaseButton>
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">SkillList</p>
    <!-- :skills เป็น props เลยมี : 
   ส่วน canEdit ที่ใส่เป็น can-edit เพราะ vue สามารถรู้ค่าได้
   @edit อันนี้เป็น emit ผลลัพธ์ที่จะเกิด-->
    <SkillList 
    :skills="['a']" 
    :can-edit="true" 
    @edit="console.log('Click')" />
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">Experience</p>
    <ExperienceItem :experience="experience" />
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">ExperienceList</p>
    <ExperienceList
      :experiences="experiences"
      :can-edit="true"
      :has-more-experiences="true"
      :is-experience-visible="isExperienceVisible"
      @edit="console.log('clicked on edit')"
      @more="console.log('cliked on more')"
    />
  </section>

  <section class="mb-10">
    <p class="font-bold text-lg">PortfoliosList</p>
    <PortfolioList
            :portfolios="portfolios"
            :can-edit="true"
            :is-getting-portfolios="false"
            :has-more-portfolios="true"
            @more="console.log('clicked on more')"
        />
  </section>

</template>
