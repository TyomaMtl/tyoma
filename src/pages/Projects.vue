<template>
     <div>
        <navbar/>
        <section class="projects">
            <ul class="timeline">
                <p>{{ $t('projects') }}</p>
                <li :class="[year == currentYear ? 'active' : '']" v-for="year in years" :key="year" v-on:click="scrollToYear(year)">{{ year }}</li>
            </ul>
            <div class="project-wrapper" ref="projects" v-on:scroll="handleScroll()">
                <div v-for="project in projects" :key="project.id" class="project" :ref="project.year" :data-year="project.year">
                    <img :src="project.cover">
                    <a class="content" :href="project.url" target="_blank">
                        <div class="info">
                            <h4>{{ project.title }}</h4>
                            <p>{{ project.year }}</p>
                            <div class="technologies">
                                <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import datas from '../datas'
import navbar from '../components/NavBar'

export default {
    components: {
        navbar
    },
    data () {
        return {
            currentYear: new Date().getFullYear(),
            projects: datas.projects
        }
    },
    methods: {
        scrollToYear: function (year) {
            var project = this.$refs[year]
            this.currentYear = year
            if (project) {
                project[0].scrollIntoView({ behavior: 'smooth' })
            }
        },
        handleScroll: function () {
            const projects = this.$refs.projects
            const wrapperRect = projects.getBoundingClientRect()
            var visibleElements = []

            // find visible projects
            projects.children.forEach(project => {
                var projectRect = project.getBoundingClientRect()
                if (projectRect.left >= wrapperRect.left && projectRect.right - 10 <= wrapperRect.right) {
                    visibleElements.push(project)
                }
            })

            // set current year of the last visible project
            this.currentYear = visibleElements[visibleElements.length - 1].dataset.year
        }
    },
    computed: {
        years: function() {
            var now = new Date().getFullYear()
            var start = 2017
            var years = []
            for (var year = now; year >= start; year--) {
                years.push(year)
            }

            return years
        }
    }
}
</script>