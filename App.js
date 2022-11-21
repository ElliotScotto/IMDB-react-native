import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import logo from "./assets/logoimdb.png";
import movieImage from "./assets/poster-interstellar.png";
import anne from "./assets/annehathaway.png";
import matthew from "./assets/matthewmcconaughey.png";
import jessica from "./assets/jessicachastain.png";
import murphChild from "./assets/murph-child.jpg";
import murphOld from "./assets/murphold.jpg";
import michaelCaine from "./assets/michaelcaine.jpg";
import caseyAffleck from "./assets/caseyaffleck.jpg";
import mattDamon from "./assets/mattdamon.jpg";
import bentley from "./assets/wesbentley.jpg";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style={"light"} />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.tinyLogo} source={logo} />
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <View style={styles.container1a}>
          <Text style={styles.movieTitle}>Interstellar</Text>
          <Text style={styles.movieInfos}>
            2014 PG-13 2h49min Adventure, Drama, Sci-Fi
          </Text>
        </View>

        <View style={styles.container1b}>
          <View style={styles.container1b1}>
            <Image style={styles.poster} source={movieImage} />
          </View>
          <View style={styles.container1bSpace} />
          <View style={styles.container1b2}>
            <View style={styles.container1b2Top}>
              <Text style={styles.moviePitch}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
            </View>

            <View style={[styles.container1cFont, styles.watchList]}>
              <TouchableOpacity style={{ backgroundColor: "#0277BD" }}>
                <Text style={styles.btnAdd}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container1c}>
          <View style={styles.container1c1}>
            <View style={styles.movieNote}>
              <FontAwesome name="star" size={27} color="gold" />
            </View>
            <Text style={[styles.container1cFont]}>8.6/10</Text>
            <Text style={styles.rateDetails}>1.1M</Text>
          </View>
          <View style={styles.container1c2}>
            <SimpleLineIcons name="star" size={27} color="white" />
            <Text style={[styles.mainColor, styles.spaceRate]}>RATE THIS</Text>
          </View>
          <View style={styles.container1c3}>
            <View style={styles.metaScore}>
              <Text style={styles.mainColor}>74</Text>
            </View>
            <Text style={styles.container1c3Font}>Metascore</Text>
            <Text style={styles.rateDetails}>46 critic reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.space} />
      <View style={styles.container2}>
        <View style={styles.container2a}>
          <Text style={[styles.mainColor, styles.movieCast]}>
            Top Billed Cast
          </Text>
          <TouchableOpacity>
            <Text style={[styles.movieCast, styles.seeAllLink]}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2b}>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.carousel}>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={matthew} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Matthew McConaughey
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Cooper
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={anne} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Anne Hathaway
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Brand
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={jessica} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Jessica Chastain
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Murph
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={murphChild} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Mackenzie Foy
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Murph, enfant
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={mattDamon} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Matt Damon
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Dr. Mann
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={bentley} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Wes Bentley
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Doyle
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={michaelCaine} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Sr. Michael Caine
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Pr.Brand
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={caseyAffleck} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Casey Affleck
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Cooper Jr
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainCard}>
                <View>
                  <Image style={styles.imageActor} source={murphOld} />
                </View>
                <View style={styles.actor}>
                  <View>
                    <Text numberOfLines={1} style={styles.mainColor}>
                      Ellen Burstyn
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.mainColor, styles.character]}>
                      Murphy Cooper âgé
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.container2c}>
          <View style={styles.teamMovie}>
            <Text style={[styles.mainColor, styles.jobMovie]}>Director</Text>
            <Text style={[styles.mainColor, styles.secondFont]}>
              Christopher Nolan
            </Text>
          </View>
          <View style={styles.teamMovie}>
            <Text style={[styles.mainColor, styles.jobMovie]}>Writers</Text>
            <Text style={[styles.mainColor, styles.secondFont]}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { height: "100%", backgroundColor: "#212121" },
  header: {
    flex: 1,
    backgroundColor: "#393939",

    marginTop: 57,
    justifyContent: "center",
  },
  tinyLogo: {
    marginLeft: 10,
    width: 75,
    height: 35,
    resizeMode: "contain",
  },

  space: {
    flex: 0.3,
    backgroundColor: "#191919",

    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 8,
    backgroundColor: "#212121",

    padding: 10,
    alignItems: "left",
    justifyContent: "top",
  },
  container1a: {
    flex: 2,
    backgroundColor: "#212121",

    alignItems: "left",
    width: "100%",
  },
  container1b: {
    flex: 3,
    backgroundColor: "#212121",

    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    width: "100%",
  },
  container1b1: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  poster: { height: "100%", width: "100%", resizeMode: "contain" },
  container1bSpace: {
    width: "3%",
    height: "100%",
  },
  container1b2: {
    color: "white",
    width: "72%",
    height: "100%",
  },
  watchList: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277BD",
    borderRadius: 4,
    height: 35,
  },
  btnAdd: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  container1c: {
    flex: 2,
    backgroundColor: "#212121",

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rateDetails: { color: "grey", fontSize: 12 },
  container1cFont: { color: "white" },
  container1c3Font: { color: "white", fontSize: 14, fontWeight: "500" },
  movieTitle: {
    color: "white",
    fontSize: 28,
    marginBottom: 10,
  },
  container1c1: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  movieNote: { paddingTop: 5 },
  container1c2: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spaceRate: { marginTop: 10 },
  container1c3: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  movieInfos: {
    color: "lightgrey",
    fontSize: 14,
    marginBottom: 15,
  },
  metaScore: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62C750",
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  moviePitch: { color: "white", fontSize: 15, marginBottom: 10 },
  container2: {
    flex: 10,
    backgroundColor: "#212121",

    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container2a: {
    flex: 0.5,
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieCast: { fontSize: 22 },
  seeAllLink: { fontSize: 16, fontWeight: "600", color: "#0B8DC9" },
  container2b: {
    flex: 3,
    width: "100%",
  },
  carousel: { flexDirection: "row" },
  mainCard: {
    height: 200,

    width: 130,
    marginLeft: 5,
  },
  imageActor: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },
  actor: {
    fontSize: 18,
    padding: 10,
    color: "white",

    height: "100%",
  },
  character: { fontSize: 14, color: "lightgrey" },
  container2c: {
    flex: 1.5,
    width: "100%",
  },
  jobMovie: { fontSize: 16, fontWeight: "500", marginBottom: 5 },
  mainColor: {
    color: "white",
  },
  secondFont: { color: "lightgrey" },
  teamMovie: { marginTop: 10 },
});
