import React, { useEffect, useState } from 'react';

import ProgressBarCmp from '../../components/ProgressBarCmp/ProgressBarCmp';
import ButtonCmp from '../../components/ButtonCmp/ButtonCmp';
import DropDownCmp from '../../components/DropDownCmp/DropDownCmp';

import { progressBarService } from '../../utils/apiUtils';

import './MainScreen.scss';

const MainScreen = () => {
  const [progressBars, setProgressBars] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [dropDowns, setDropDowns] = useState([]);
  const [selectedProgressId, setSelectedProgressId] = useState(0);

  const loadBarData = () => {
    let progressBarArray = [],
      dropDownArray = [];

    progressBarService()
      .then(progressData => {
        progressData.bars.forEach((value, index) => {
          progressBarArray.push({
            progress: value,
            progressId: index,
            limit: progressData.limit,
            exceeded: false
          });

          dropDownArray.push({
            label: 'Progress ' + (index + 1),
            value: index
          });
        });
        let buttonsArray = progressData.buttons.map((value, index) => {
          return {
            text: value,
            index: index
          };
        });
        setProgressBars(progressBarArray);
        setDropDowns(dropDownArray);
        setButtons(buttonsArray);
      })
      .catch(err => {
        // TODO: Handle error
      });
  };

  const handleClick = (event, buttonData) => {
    event.preventDefault();
    const latestProgresses = progressBars.map(progressBarData => {
      if (progressBarData.progressId === selectedProgressId) {
        const latestProgress = progressBarData.progress + buttonData.text;
        return {
          ...progressBarData,
          progress: latestProgress <= 0 ? 0 : latestProgress,
          exceeded: latestProgress > progressBarData.limit ? true : false
        };
      }
      return progressBarData;
    });
    setProgressBars(latestProgresses);
  };

  const handleDropDownChange = selection => {
    setSelectedProgressId(selection.value);
  };

  useEffect(() => {
    loadBarData();
  }, []);

  return (
    <div data-test="screen-main" className="container">
      <div className="col-md-8 offset-md-2">
        <div className="progressBarsContainer card">
          <h3 className="progressBarsHeading">Singtel Test</h3>
          <div className="progressBarsContainer">
            {progressBars.map((item, index) => (
              <div key={index} className="progressBarContainer">
                <ProgressBarCmp {...item} />
              </div>
            ))}
          </div>
          <div className="row buttonContainer">
            <div className="col-md-3 col-xs-6 mediumDevices">
              <DropDownCmp
                options={dropDowns}
                onChange={selection => handleDropDownChange(selection)}
              />
            </div>
            <div className="col-md-9">
              <div className="row">
                {buttons.map((item, i) => (
                  <div
                    key={i}
                    className="col-xs-6 col-md-2  smallDevices mediumDevices"
                  >
                    <ButtonCmp
                      onClick={event => handleClick(event, item)}
                      {...item}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
