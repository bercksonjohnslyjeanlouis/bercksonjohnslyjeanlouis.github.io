
// const en_base_url='/data/en/';
// const ht_base_url='/data/ht/';

const fr_base_url='/data/fr/';

document.addEventListener('alpine:init', async () => {

    Alpine.store('database',
        {
            skills : { },

            menu : { },

            map : { },

            loaded_certifications : false,
            loaded_events : false,
            loaded_experiences : false,
            loaded_map : false,
            loaded_skills : false,
            loaded_menu : false,
            loaded_photos : false,
            loaded_designs : false,
            loaded_posts : false,
            loaded_profile : false,
            loaded_projects : false,
            loaded_real_languages : false,
            loaded_services : false,
            loaded_studies : false,
            loaded_testimonials : false,

            async get_services() {
                await fetch(fr_base_url + 'services.json', {
                    method: 'GET',
                })
                .then((response) => response.json())
                    .then((services) => {
                            this.services = services;
                        this.loaded_services=true;
                            console.log(this.services)
                        }
                    );
            },

            async get_testimonials() {
                await fetch(fr_base_url + 'testimonials.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((testimonials) => {
                            this.testimonials = testimonials;
                        this.loaded_testimonials=true;
                            console.log(this.testimonials)
                        }
                    );
            },



            get_text_header(data, link) {
                for (const element of data) {
                    if (element.link === link) {
                        console.log('Le header : '+element.text)
                        return element.text;
                    }
                    if (element.children) {
                        const childResult = this.get_text_header(element.children, link);
                        if (childResult) {
                            console.log('Le header : '+element.text)
                            return childResult;
                        }
                    }
                }
                console.log('Le header :  null')
                return null;
            },

            get_text_intro(data,link) {
                for (const element of data) {
                    if (element.link === link) {
                        console.log('Le header : '+element.intro)
                        return element.intro;
                    }
                    if (element.children) {
                        const childResult = this.get_text_intro(element.children, link);
                        if (childResult) {
                            console.log('Le header : '+childResult)
                            return childResult;
                        }
                    }
                }
                console.log('Le header :  null')
                return null;
            },


            get_skills_group(group) {
             if(this.map.skills.hasOwnProperty(group)) {
                        return this.map.skills[group];
                    } else {
                        return null;
                    }
            },



            async get_posts() {
                await fetch(fr_base_url + 'posts.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((posts) => {
                        this.posts=posts;
                        this.loaded_posts=true;
                            console.log(this.posts)
                        }
                    );
            },


            async get_team() {
                await fetch(fr_base_url + 'team.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((team) => {
                            this.team=team;
                            this.loaded_team=true;
                            console.log(this.team)
                        }
                    );
            },


            get_photos_categories() {
                const categoriesSet = new Set();

                this.photos.forEach(photo => {
                    categoriesSet.add(photo.category);
                });

                this.photos_categories=Array.from(categoriesSet);
                console.log(' les categories : '+this.photos_categories)

                // return Array.from(categoriesSet);
            },


            filter_photos(category){
                if (category === null) {
                    return this.photos;
                } else {
                    return this.photos.filter(photo => photo.category === category);
                }

            },

            filter_designs(category){
                if (category === null) {
                    return this.designs;
                } else {
                    return this.designs.filter(design => design.category === category);
                }

            },


            async get_events() {
                await fetch(fr_base_url + 'events.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((events) => {
                            this.events = events;
                        this.loaded_events=true;
                            console.log(this.events)
                        }
                    );

            },


            async get_experiences() {
                await fetch(fr_base_url+'experiences.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((experiences) => {
                            this.experiences = experiences;
                        this.loaded_experiences=true;
                            console.log(this.experiences)
                        }
                    );
            },


            async get_projects() {
                await fetch(fr_base_url + 'projects.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((projects) => {
                            this.projects = projects;
                        this.loaded_projects=true;
                            console.log(this.projects)
                        }
                    );
            },


            async get_menu() {
                await fetch(fr_base_url + 'menu.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((options) => {
                            this.options = options;
                        this.loaded_menu=true;
                            console.log(this.options)
                        }
                    );
            },


            async get_featured_project() {
                await fetch(fr_base_url + 'projects.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((projects) => {
                            this.featured_project = projects[0];
                            console.log(this.featured_project)
                        }
                    );
            },


            async get_photos() {
                await fetch(fr_base_url + 'photos.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((photos) => {
                            this.photos = photos

                        const categoriesSet = new Set();

                        this.photos.forEach(photo => {
                            categoriesSet.add(photo.category);
                        });

                        this.photos_categories=Array.from(categoriesSet);
                        console.log(' les categories : '+this.photos_categories)

                        this.loaded_photos=true;
                            console.log(this.photos)

                        }
                    );
            },

            async get_designs() {
                await fetch(fr_base_url + 'designs.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((designs) => {
                            this.designs = designs

                            const categoriesSet = new Set();

                            this.designs.forEach(design => {
                                categoriesSet.add(design.category);
                            });

                            this.designs_categories=Array.from(categoriesSet);
                            console.log(' les categories : '+this.designs_categories)

                            this.loaded_designs=true;
                            console.log(this.designs)

                        }
                    );
            },



            async get_studies() {
                await fetch(fr_base_url + 'studies.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((studies) => {
                            this.studies = studies;
                        this.loaded_studies=true;
                            console.log(this.studies)
                        }
                    );
            },



            async get_certifications() {
                await fetch(fr_base_url + 'certifications.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((certifications) => {
                            this.certifications = certifications;
                            this.loaded_certifications=true;
                            console.log(this.certifications)
                        }
                    );
            },



            async get_skills() {
                try {
                    const [
                        databasesResponse, frameworksResponse, frontendResponse,
                        languagesResponse, softwareResponse, systemsResponse,
                        toolsResponse
                    ] = await Promise.all([
                        fetch(fr_base_url + 'databases.json', { method: 'GET' }),
                        fetch(fr_base_url + 'frameworks.json', { method: 'GET' }),
                        fetch(fr_base_url + 'frontend.json', { method: 'GET' }),
                        fetch(fr_base_url + 'languages.json', { method: 'GET' }),
                        fetch(fr_base_url + 'software.json', { method: 'GET' }),
                        fetch(fr_base_url + 'systems.json', { method: 'GET' }),
                        fetch(fr_base_url + 'tools.json', { method: 'GET' }),
                    ]);

                    this.skills.databases = await databasesResponse.json();
                    this.skills.frameworks = await frameworksResponse.json();
                    this.skills.frontend = await frontendResponse.json();
                    this.skills.languages = await languagesResponse.json();
                    this.skills.software = await softwareResponse.json();
                    this.skills.systems = await systemsResponse.json();
                    this.skills.tools = await toolsResponse.json();

                    this.loaded_skills = true;
                    console.log(this.skills);
                } catch (error) {
                    console.error('Error fetching skills:', error);
                    // Handle errors here
                }
            },



            async get_map() {
                await fetch(fr_base_url + 'map.json', {
                    method: 'GET',
                })
                    .then((response) => response.json())
                    .then((map) => {
                            this.map = map;
                        this.loaded_map=true;
                            console.log(this.map)
                        }
                    );
            }



        }

        );





})
