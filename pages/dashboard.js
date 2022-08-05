import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import stylesHome from "../styles/Home.module.scss";
import DashboardLayout from "../components/DashboardLayout";
import "normalize.css";

export default function Dashboard() {
  return (
    <div className={styles.main}>
      <div className={styles.flexContainerRight}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.mainTitle}>Mon planing</h1>
            <p className={styles.simpleText}>
              Vos informations sont incomplètes.
              <br /> Rendez vous dans votre profil pour finaliser votre
              inscription et ainsi générer votre planing
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={`${stylesHome.btn} ${stylesHome.btnPrimary}`}>
              Générer
            </button>
          </div>
        </div>

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Lundi</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Mardi</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Mercredi</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Jeudi</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Vendredi</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Samedi</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <h2 className={styles.title__day}>Dimanche</h2>
          <hr className={styles.separateLane} />
          <div className={styles.card__container}>
            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>

            <div className={styles.Card}>
              <div className={styles.container__picture}>
                <Image
                  alt="image de la recette"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <div>
                <h3 className={styles.name__recipe}> Recipe Name </h3>
                <p className={styles.time__recipe}>15 mins</p>
              </div>
              <div>
                <button className={styles.button__card} type="button">
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END CARDS */}
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(Dashboard) {
  return <DashboardLayout>{Dashboard}</DashboardLayout>;
};
