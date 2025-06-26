import classNames from "classnames";
import cls from "./homepage.module.scss";
import { AudioList } from "../../components/AudioList/AudioList";

export const HomePage = () => {
  return (
    <>
      <div className={cls.animated_wrapper}>
        <div className={classNames(cls.optimized_dot, cls.dot_purple)}></div>
        <div className={classNames(cls.optimized_dot, cls.dot_blue)}></div>
      </div>
      <section className={cls.intro}>
        <div className="container">
          <div className={cls.intro__wrapper}>
            <div className={cls.intro_inner}>
              <h1 className={cls.title}>Hello, I'm Imran. I'm a developer.</h1>
              <p className={cls.description}>
                I have 1 year of experience at IGS Web Start, Coddy, Ingternet,
                Solvo and as a freelancer.
              </p>
              <p className={cls.description}>
                I value <span className={cls.bold}>clarity</span>,
                <span className={cls.bold}> empathy</span>, and
                <span className={cls.bold}> integrity</span> above all else.
                These ideals guide my approach to problem solving and life in
                general.
              </p>
            </div>

            <AudioList />
          </div>
        </div>
      </section>
    </>
  );
};
