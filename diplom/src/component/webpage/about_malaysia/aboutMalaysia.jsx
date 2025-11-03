import React from "react";
import "./aboutMalaysia.css";
import Headerr from "../../header/header";
import Footer from "../../footer/footer";
import ScrollUpButton from "../../button/ScrollUpButton";
import ScrollUpButtonCs from "../../button/ScrollUpButtonCs";
import NavBarArticle from "../../nav-bar-article/navBarArticle";
import MapView from "../../map/map";

const AboutMalaysia = () => {
  const NavbarTemp = [
    {
      href: "#Geography",
      content: "Geography",
    },
    {
      href: "#Climate",
      content: "Climate",
    },
    {
      href: "#Flora",
      content: "FLora and Fauna",
    },
    {
      href: "#People",
      content: "People of Malaysia",
    },
  ];

  const base = import.meta.env.BASE_URL;

  return (
    <div className="about-malaysia-container">
      {" "}
      <div className="aboutMalaysiaHeader">
        <Headerr
          backgroundImage={`${base}assets/about-malaysia/habout.png`}
          style={{ backgroundSize: "100vw" }}
        />
      </div>
      <div className="bottom-button">
        <div className="scroll-up-button-container">
          <ScrollUpButton />
        </div>
        <div className="scroll-button-cs">
          <ScrollUpButtonCs />
        </div>
      </div>
      <div className="about-malaysia-container-2">
        <div className="about-text-1">
          <h2>
            Discover the Soul of Malaysia: Its Heritage, Its Landscapes, Its
            People.
          </h2>
        </div>

        <div
          className="about-vid-intro"
          style={{ margin: "auto", justifyContent: "center", display: "flex" }}
        >
          <video
            src={`${import.meta.env.BASE_URL}assets/about-malaysia/visitMalaysia.mp4`}
            className="about-malaysia-vid"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className="about-article">
          <div className="about-side-bar" style={{ marginTop: "47px" }}>
            <div className="about-side-bar-summary">
              <p style={{ margin: "0", paddingTop: "15px" }}>Summary</p>
            </div>
            <hr
              style={{
                width: "78%",
                color: "#4E7777",
                border: "none",
                borderTop: "2px solid",
              }}
            />

            <div className="about-side-bar-content">
              {NavbarTemp.map((item) => (
                <NavBarArticle
                  key={item.href}
                  href={item.href}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          <div className="about-malaysia-article">
            <h2 id="Geography">Geography</h2>
            <p>
              Malaysia, country of Southeast Asia, lying just north of
              the Equator, that is composed of two noncontiguous
              regions: Peninsular Malaysia (Semenanjung Malaysia), also called
              West Malaysia (Malaysia Barat), which is on the Malay Peninsula,
              and East Malaysia (Malaysia Timur), which is on the island
              of Borneo.
            </p>
            <p>
              The Malaysian capital, Kuala Lumpur, lies in the western part of
              the peninsula, about 25 miles (40 km) from the coast; the
              administrative centre, Putrajaya, is located about 16 miles (25
              km) south of the capital.
            </p>
            <figure>
              <MapView
                position={[4.5, 109]}
                zoom={5.5}

              />
              <figcaption>Malaysia's Map</figcaption>
            </figure>

            <p>
              Malaysia, a member of the Commonwealth, represents the
              political marriage of territories that were formerly under British
              rule. When it was established on September 16, 1963,
              Malaysia comprised the territories of Malaya (now Peninsular
              Malaysia), the island of Singapore, and the colonies
              of Sarawak and Sabah in northern Borneo. In August 1965 Singapore
            </p>
            <h2 id="Climate">Climate of Malaysia</h2>
            <p>
              Both peninsular and insular Malaysia lie in the same tropical
              latitudes and are affected by similar airstreams. They have high
              temperatures and humidities, heavy rainfall, and a climatic year
              patterned around the northeast and southwest monsoons. The four
              seasons of the climatic year are the northeast monsoon (from
              November or December until March), the first intermonsoonal period
              (March to April or May), the southwest monsoon (May or June to
              September or early October), and the second intermonsoonal period
              (October to November). The onset and retreat of the two monsoons
              are not sharply defined.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/climate1.jpg`}
                alt="climate1"
                style={{
                  width: "70%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Kuala Lumpur's weather after the rain </figcaption>
            </figure>
            <p>
              Although Malaysia has an equatorial climate, the narrowness and
              topographic configuration of each portion—central mountainous
              cores with flat, flanking coastal plains—facilitate the inland
              penetration of maritime climatic influences. The monsoons further
              modify the climate. The northeast monsoon brings heavy rain and
              rough seas to the exposed coasts of southwestern Sarawak and
              northern and northeastern Sabah, and it sometimes causes flooding
              in the eastern part of the peninsula. The southwest monsoon
              affects mainly the southwestern coastal belt of Sabah, where
              flooding is common. Neither peninsular nor insular Malaysia is in
              the tropical cyclone (typhoon) belt, but their coasts occasionally
              are subject to the heavy rainstorms associated with squalls.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/wind.png`}
                alt="moonson-map"
                style={{
                  width: "70%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Monsoon Wind Direction</figcaption>
            </figure>
            <p>
              Temperatures are uniformly high throughout the year. On the
              peninsula, they average about 80 °F (27 °C) in most lowland areas.
              In coastal areas in East Malaysia, minimum temperatures range from
              the low to mid-70s F (about 23 °C), and maximum
              temperatures hover around 90 °F (32 °C); temperatures are lower in
              the interior highland regions. The mean annual rainfall on the
              peninsula is approximately 100 inches (2,540 mm); the driest
              location, Kuala Kelawang (in the district of Jelebu), near Kuala
              Lumpur, receives about 65 inches (1,650 mm) of rain per year,
              while the wettest, Maxwell’s Hill, northwest of Ipoh, receives
              some 200 inches (5,000 mm) annually. Mean annual precipitation in
              Sabah varies
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/tempmap.png`}
                alt="temperature-map"
                style={{
                  width: "70%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Average Temperature on Malaysia</figcaption>
            </figure>
            <h2 id="Flora">Flora and Fauna</h2>
            <p>
              The characteristic vegetation of Malaysia is dense
              evergreen rainforest. Rainforest still covers more than two-fifths
              of the peninsula and some two-thirds of Sarawak and Sabah; another
              fraction of the country is under swamp forest. Soil type,
              location, and elevation produce distinctive vegetation zones:
              tidal swamp forest on the coast, freshwater- and peat-swamp forest
              on the ill-drained parts of the coastal plains, lowland rainforest
              on the well-drained parts of the coastal plains and foothills up
              to an elevation of about 2,000 feet (600 metres), and submontane
              and montane forest (also called cloud forest) in higher areas. The
              highly leached and sandy soils of parts of central Sarawak and the
              coast support an open heathlike forest commonly
              called kerangas forest.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/hutan.jpg`}
                alt="hutan_img"
                style={{
                  width: "70%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>
                Jungle at Royal Belum State Park, Perak, Malaysia
              </figcaption>
            </figure>
            <p>
              The flora of the Malaysian rainforest is among the richest in the
              world. There are several thousand species of vascular plants,
              including more than 2,000 species of trees, as well as the
              parasitic monster flower (Rafflesia arnoldii of
              the Rafflesiaceae family), which bears the world’s largest known
              flower, measuring nearly 3 feet (1 metre) in diameter. Numerous
              varieties of the carnivorous pitcher plants (Nepenthes) also grow
              in Malaysia’s forests. One acre (0.4 hectare) of forest may have
              as many as 100 different species of trees, as well as shrubs,
              herbs, lianas (creepers), and epiphytes (nonparasitic plants that
              grow on other plants and derive nourishment from the atmosphere).
              The forest canopy is so dense that little sunlight can penetrate
              it. As a result, the undergrowth usually is poorly developed
              and—contrary to popular belief—is not impenetrable. Much of the
              original rainforest has been destroyed by clearances made for
              agricultural or commercial purposes, by severe wind and lightning
              storms, and by indigenous peoples clearing it for shifting
              cultivation. When such cleared land is subsequently abandoned,
              coarse grassland, scrub, and secondary forest often develop.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/bunga.jpg`}
                alt="bunga_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>
                Rafflesia keithii which can be found in Sabah, Malaysia{" "}
              </figcaption>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/penyu.jpg`}
                alt="penyu_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>
                Green turtle which can be found on the coastline of Terengganu,
                Pahang, Johor, Perak, Sabah and Sarawak.
              </figcaption>
            </figure>
            <p>
              The flora of the Malaysian rainforest is among the richest in the
              world. There are several thousand species of vascular plants,
              including more than 2,000 species of trees, as well as the
              parasitic monster flower (Rafflesia arnoldii of
              the Rafflesiaceae family), which bears the world’s largest known
              flower, measuring nearly 3 feet (1 metre) in diameter. Numerous
              varieties of the carnivorous pitcher plants (Nepenthes) also grow
              in Malaysia’s forests. One acre (0.4 hectare) of forest may have
              as many as 100 different species of trees, as well as shrubs,
              herbs, lianas (creepers), and epiphytes (nonparasitic plants that
              grow on other plants and derive nourishment from the atmosphere).
              The forest canopy is so dense that little sunlight can penetrate
              it. As a result, the undergrowth usually is poorly developed
              and—contrary to popular belief—is not impenetrable. Much of the
              original rainforest has been destroyed by clearances made for
              agricultural or commercial purposes, by severe wind and lightning
              storms, and by indigenous peoples clearing it for shifting
              cultivation. When such cleared land is subsequently abandoned,
              coarse grassland, scrub, and secondary forest often develop.
            </p>
            <h2 id="People">People of Malaysia</h2>
            <p>
              The Malaysian population consists of people of different races,
              religions and race. The largest group of Malaysians consist of
              three main races, namely the Malays, Chinese and Indians. Orang
              Asli are the natives in Peninsular Malaysia and is generally
              divided into three major groups, namely the Negrito, Senoi and
              Proto-Malay. Sabah’s population consists of 32 ethnic groups and
              the major ethnic is Kadazandusun while Sarawak population consists
              of 27 ethnic groups and Iban is the major ethnic group. In 2015,
              the prefix data of Malaysian population is 30,995,700 and the
              divisions by ethnics are as follow: Bumiputera - 19,150,900
              (61.8%); Chinese - 6,620,300 (21.4%); Indian - 1,988,600 (6.4%);
              Others - 270,700 (0.9%) and Non-Malaysian Resident - 2,965,300
              (9.6%). Live births in 2015 recorded a decrease of 1.4% compared
              to 2014. Population in the age group 0 to 14 in 2015 is 24.9%; 15
              to 64 years is 69.2% and 65 years and above is 5.8%.
            </p>
            <figcaption>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/1m.jpg`}
                alt="1malaysia_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>
                Difference races living in harmony in Malaysia
              </figcaption>
            </figcaption>
            <h3>Sarawak</h3>
            <p>
              Sarawak is well-known for its cultural diversity. Malaysia’s
              largest state is home to at least 34 different ethnicities, with
              the Ibans, Chinese, Malays, Bidayuhs, Melanaus, Orang Ulus, Penans
              and Kayans, just to name a few
            </p>
            <p>
              The Ibans make up close to 30 percent of Sarawak’s population
              making them the largest indigenous ethnic group in the state.
              Ibans are known for their traditional longhouses, which hold great
              cultural significance in their architecture. They celebrate Gawai
              Dayak, a festival of thanksgiving for the bountiful harvest where
              traditional dances like the Ngajat are performed, and a
              traditional rice wine drink named ‘tuak’ is served. Sarawakian
              Ibans are also well known for their artistry and traditional
              clothing. The men dress in “sirat” with a very long loincloth
              around the waist, while the ladies wear the Ngepan Iban. Iban pua
              kumbu blankets, bark cloths, wood carvings, baskets, and ironwork
              pay homage to the bravery of Iban warriors and have become a
              popular choice for souvenirs in the tourism industry for their
              distinctive designs.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/bangsa1.jpg`}
                alt="bangsa_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Iban tribe</figcaption>
            </figure>
            <p>
              The Bidayuhs mainly reside in Lundu, Bau, Penrissen, Padawan,
              Siburan and Serian. They have architectural wonders that are
              unique to their culture. An example of this is the baruk
              roundhouse for community gatherings and functions. It is also here
              where celebrations for the harvest seasons are held.Traditional
              dances like the Rejang Beuh or Eagle Dance are performed in the
              longhouse. According to tradition, Bidayuh men would wear a long
              loin cloth called Tahup while women would dress in Jomuh or a
              short petticoat. Cylindrical carrying baskets known as tambok
              woven from rattan used to carry home forest produce are also a
              Bidayuh trademark.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/bangsa-2.jpg`}
                alt="bangsa_2_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Bidayuh tribe</figcaption>
            </figure>
            <p>
              The Melanaus are among the earliest settlers of Sarawak. They have
              their own language categorised under the North Bornean branch of
              Malayo-Polynesian languages. Over time, they have taken influence
              from Malay culture in terms of traditional clothing, religion, and
              lifestyle. Melanau men dress in Baban, an attire with a strong
              resemblance to the Malay traditional outfit, baju Melayu. The
              women’s attire also closely resembles the baju kurung worn by
              Malay ladies. This community’s rich history and livelihood along
              Sarawak’s seashore is portrayed by their traditional dances
              performed during special occasions.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/bangsa3.jpg`}
                alt="bangsa3_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Melanau tribe</figcaption>
            </figure>
            <p>
              Orang Ulu refers to the many diverse tribal groups who live mostly
              in the upriver and uphill areas of Sarawak. Orang Ulus are
              renowned for their artistic eye as can be seen by the elaborately
              decorated mural designs and wood carvings embedded on the walls of
              their longhouses. This is also seen in their beadwork, detailed
              body tattoos, and rattan weaving. To celebrate the Orang Ulu’s
              hunting culture, the Kanjet Ngeleput was created and performed by
              a male dancer in full warrior attire. This captivating dance
              portrays the nimble yet stealthy movements of the warrior as he
              goes on a hunting trip in the jungle, accompanied by the sape, a
              traditional Orang Ulu musical instrument.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/bangsa4.jpg`}
                alt="bangsa4_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Orang Ulu</figcaption>
            </figure>
            <h3>Sabah</h3>
            <p>
              Sabah's population is made up 33 indigenous groups that
              communicate in over 50 languages and 80 ethic dialects. The
              Kadazan-Dusun is the largest ethnic group in Sabah that makes up
              almost 30% of the population. Celebrated annually on 30th & 31st
              May, the Harvest Festival is the most celebrated holiday of the
              year by the Kadazan-Dusun to honor the Rice Spirit and to give
              thanks for a bountiful harvest. The Bajaus, or also known as
              "Cowboys of the East", and Muruts, the hill people and head
              hunters in the past, are the second and third largest ethnic group
              in Sabah respectively. Other indigenous tribes include the Bisaya,
              Brunei Malay, Bugis, Kedayan, Lotud, Ludayeh, Rungus, Suluk,
              Minokok, Bonggi, the Ida'an, and many more. In addition to that,
              the Chinese makes up the main non-indigenous group of the
              population.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/various.jpg`}
                alt="various_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Multiculture people in Sabah</figcaption>
            </figure>
            <p>
              Kadazan-Dusun is the term assigned to the unification of the
              classification of two indigenous tribes in Sabah. They are also
              the largest ethnic group which comprises about 1/3 of the
              population - Kadazan and Dusun. Traditionally, they are mostly
              traditional farmers cultivating paddy rice and upland rice, as
              well as hunting and ravine fishing. The Sumazau dance is the
              traditional dance of the Kadazan-Dusun community.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/kdzn.jpg`}
                alt="kazadazan_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Kadazan Dusun</figcaption>
            </figure>
            <p>
              The Murut are an indigenous ethnic group which comprises 29
              sub-ethnic groups inhabiting the northern inland regions of
              Borneo. The Muruts were the last of Sabah's ethnic groups to
              renounce headhunting. This is because collecting heads of enemies
              traditionally served a very important role in Murut spiritual
              beliefs. The literal translation of murut is "hill people".
              Traditionally, they were shifting cultivators of hill paddy and
              tapioca, but they also do activities like blowpipe hunting and
              some fishing. They live in communal longhouses near rivers, using
              it as the means to travel
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/murut.jpg`}
                alt="murut_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Murut Tribe</figcaption>
            </figure>
            <p>
              The Bajau people are an indigenous ethnic group that live in the
              West Coast (Putatan, Tuaran, Kota Belud, Kota Marudu, Papar) and
              East Coast of Sabah (Kudat, Sandakan, Lahad Datu, Kunak, Semporna,
              Tawau). They work as farmers and fishermen. Besides being expert
              divers, they are also popular for their excellent horsemanship.
              Hence, the Bajau tribe from the West Coast are known as the
              "cowboys of the east", while their East Coast tribe have sometimes
              been referred to as the "Sea Gypsies" for their seafaring ways.
            </p>
            <figure>
              <img
                src={`${import.meta.env.BASE_URL}assets/about-malaysia/bajau.jpg`}
                alt="bajau_img"
                style={{
                  width: "80%",
                  margin: "auto",
                  paddingTop: "40px",
                  paddingBottom: "5px",
                }}
              />
              <figcaption>Bajau Laut</figcaption>
            </figure>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMalaysia;
