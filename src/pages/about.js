import * as React from "react"



const About = () => {
  return (
      <div x-init="to_top(); $store.database.get_menu();">

        <section class="about section">
          <div class="section-inner-g">
            <div class="content">
              <p style="text-align: justify" id="about" class="animate-box" data-animate-effect="fadeInLeft">
                Je suis étudiant finissant en Sciences Informatiques et
                certifié en Sciences de Gestion. Passionné par les TIC,
                je passe la plupart de mon temps sur un ordinateur portable
                et je pourrais même me qualifier comme quelqu’un d’actif
                dans le monde de la technologie. J’ai passé ces cinq
                dernières années à surfer un peu partout sur le web et je
                crois que j’ai appris suffisamment de choses qui me
                permettront de vous aider avec soucis concernant l’informatique.
              </p>
            </div><!--//content-->
          </div><!--//section-inner-->
        </section><!--//section-->

        <section class="experience section" x-data x-cloak x-init="$store.database.get_experiences()">
          <div class="section-inner-g ">
            <h2 class="heading">EXPERIENCES</h2>
            <div class="deco"></div>
            <div class="content" x-show="$store.database.loaded_experiences"
                 style="text-align: justify;" id="experience">

              <template x-for="experience in $store.database.experiences">
                <div class="item">
                  <h3 class="title"><i :class="experience.icon"></i>&nbsp;&nbsp;&nbsp;
                  <span x-text="experience.title"></span>
                  <span class="place">
									<a :href="experience.link">
										<span x-text="experience.institution"></span>
									</a>
                </span><br>
                <span class="year" x-text="experience.year"></span></h3>
                <ul class="list-unstyled">
                  <template x-for="task in experience.tasks">
                    <li x-text="'- '+task" > </li>
                  </template>
                </ul>
                <p x-text="experience.description"></p>
            </div><!--//item-->
          </template>
      </div><!--//content-->
  <div class="my-3 d-flex justify-content-center align-items-center text-center">
    <div class="loader" x-show="!$store.database.loaded_experiences">
      <div class="loader-wheel"></div>
      <div class="loader-text"></div>
    </div>
  </div>
</div><!--//section-inner-->
</section>
<!--//section-->

  <section class="experience  section" x-data x-cloak  x-init="$store.database.get_studies()">
    <div class="section-inner-g">
      <h2 class="heading">ÉDUCATION</h2>
      <div class="deco"></div>
      <div class="content" x-show="$store.database.loaded_studies">
        <template x-for="study in $store.database.studies">
          <div class="item">
            <h3 class="title"><i :class="study.icon"></i>&nbsp;&nbsp;&nbsp;
            <span x-text="study.name"></span>
            <span class="place">
              <a :href="study.link">
                  <span x-text="study.university"></span>
              </a>
          </span>
          <br>
            <span class="year" x-text="study.year"></span>
          </h3>
          <ul class="list-unstyled">
            <template x-for="course in study.courses">
              <li x-text="'- '+course" > </li>
            </template>
          </ul>
      </div><!--//item-->
    </template>
  </div><!--//content-->
  <div class="my-3 d-flex justify-content-center align-items-center text-center">
    <div class="loader" x-show="!$store.database.loaded_studies">
      <div class="loader-wheel"></div>
      <div class="loader-text"></div>
    </div>
  </div>
</div><!--//section-inner-->
</section><!--//section-->


  <section class="list music section" x-data x-cloak
           x-init="$store.database.get_skills()">
    <div class="section-inner-g">
      <h2 class="heading">COMPÉTENCES</h2>
      <div class="deco"></div>
      <div class="content">
        <p class="intro" style="text-align: justify" x-text="$store.database.map.section_skills">
          <div x-show="$store.database.loaded_skills">
            <template x-for="group in Object.keys($store.database.skills)">
              <div>
           <span x-text="(Object.keys($store.database.skills).indexOf(group)+1)+' - '+
           $store.database.get_skills_group(group.toString())"></span>
                <div class="row py-1">
                  <template class="" x-for="skill in $store.database.skills[group]">
                    <div class="col-4 col-md-2">
                      <div class="card mb-3 card-body">
                        <div class="align-items-center">
                          <div class="width-full">
                            <div class="width-100" style="text-align: center">
                              <i :class="skill.icon" style="font-size: 20px"></i>
                          </div>
                        </div>
                        <div class="col">
                          <div class="overflow-hidden flex-nowrap width-full" style="text-align: center">
                            <strong class="mb-1 text-center" style="font-size: 11px">
                          <span x-text="skill.name"
                                class="text-reset" style="text-space: pre; text-wrap: none ">
                          </span>
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </template>
          </div>
      </div>
    </template>
  </div>
</div><!--//content-->
  <div class="my-3 d-flex justify-content-center align-items-center text-center">
    <div class="loader" x-show="!$store.database.loaded_skills">
      <div class="loader-wheel"></div>
      <div class="loader-text"></div>
    </div>
  </div>
</div><!--//section-inner-->
</section><!--//section-->



  <section class="experience  section" x-data x-cloak
           x-init="$store.database.get_certifications()">
    <div class="section-inner-g">
      <h2 class="heading">CERTIFICATIONS DIVERSES</h2>
      <div class="deco"></div>
      <div class="content" x-show="$store.database.loaded_certifications">
        <template x-for="certification in $store.database.certifications">
          <div class="item">
            <h3 class="title"><i :class="certification.icon"></i>&nbsp;&nbsp;&nbsp;
            <span x-text="certification.name"></span>
            <span class="place">
              <a :href="certification.link">
                  <span x-text="certification.university"></span>
              </a>
          </span>
          <br>
            <span class="year" x-text="certification.year"></span>
          </h3>
          <ul class="list-unstyled">
            <template x-for="course in certification.courses">
              <li x-text="'- '+course" > </li>
            </template>
          </ul>
      </div><!--//item-->
    </template>
  </div><!--//content-->
  <div class="my-3 d-flex justify-content-center align-items-center text-center">
    <div class="loader" x-show="!$store.database.loaded_certifications">
      <div class="loader-wheel"></div>
      <div class="loader-text"></div>
    </div>
  </div>
</div><!--//section-inner-->
</section><!--//section-->


  <section class="languages section" style="display: none">
    <div class="section-inner-g">
      <h2 class="heading">LANGUES</h2>
      <div class="deco"></div>
      <div class="content">
        <ul class="list-unstyled">
          <li class="item">
            <span class="title"><strong>Francais &amp; Cr&eacute;ole : </strong></span>
            <span class="level">Langues Natales <br class="visible-xs"/>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
							</span>
          </li><!--//item-->
          <li class="item">
            <span class="title"><strong>Anglais : </strong></span>
            <span class="level">Intermédiaire<br class="visible-sm visible-xs"/>
								<i class="fas fa-star"></i>
								<i class="fas fa-star"></i>
							</span>
          </li><!--//item-->
          <li class="item">
            <span class="title"><strong>Espagnol : </strong></span>
            <span class="level">D&eacute;butant <br class="visible-sm visible-xs"/>
								<i class="fas fa-star"></i>
								<i class="fas fa-star-half"></i>
							</span>
          </li><!--//item-->
        </ul>
      </div><!--//content-->
    </div><!--//section-inner-->
  </section><!--//section-->


  <section class="experience section" style="margin-top: -25px">
    <div class="section-inner-g">
      <div class="content">
        <div class="my-3 d-flex justify-content-center align-items-center text-center mb-3">
          <a
              class="btn btn-cta-primary"
              href="https://www.linkedin.com/in/bercksonjohnslyjeanlouis">
            CONSULTER MON PROFIL LINKEDIN
          </a>
        </div>
      </div>
    </div>
  </section>

</div>


)
}

export default About

export const Head = () => <title>ABOUT</title>
