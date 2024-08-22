
import React from 'react';
import Pageheadercontainer from '../../component/Pageheadercontainer';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import { skillData } from './utils';
import { Animate } from 'react-simple-animate';
import './style.css';

function Skill() {
  return (
    <section id='Skill' className='Skill'>
      <Pageheadercontainer
        HeadersText="Skill"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='skill__container-wrapper'>

        {
        skillData.map((item, i) => (
          <div key={i} className='skill__container-wrapper__inner-content'>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className='skill__container-wrapper__inner-content__category-text'>{item.label}</h3>

              <div className='skill__container-wrapper__inner-content__progressbar-container'>

                {
                item.data && item.data.map((skillItem, j) => (

                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className='progressbar_wrapper'>
                      <h4>{skillItem.skillName}</h4>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  // </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
