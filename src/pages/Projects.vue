<template>
     <div>
        <div class="topbar">
            <router-link class="logo" :to="{ name: 'portfolio' }">Tyoma</router-link>
        </div>
        <section class="projects">
            <ul class="timeline">
                <p>Projects</p>
                <li v-for="year in years" :key="year">{{ year }}</li>
            </ul>
            <div class="project-wrapper">
                <div v-for="project in projects" :key="project.id" class="project">
                    <img :src="project.cover">
                    <a class="content" href="#">
                        <h4>{{ project.title }}</h4>
                        <p>{{ project.year }}</p>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import datas from '../datas'

export default {
    data () {
        return {
            projects: datas.projects
        }
    },
    computed: {
        years() {
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