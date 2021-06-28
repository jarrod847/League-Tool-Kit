import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetChampionDetails } from "../redux/champions/actions/championAction";
import { RootStore } from "../redux/store";
import {
  ChampionPageCont,
  ChampionDetailSection,
  ChampionDetailCont,
  ChampionHeaderCont,
} from "../styles/champions/championPage";
import LoadingSpinner from "../util/loadingSpinner";

const ChampionPage: React.FC = () => {
  const dispatch = useDispatch();
  const detailedData = useSelector((state: RootStore) => state.championDetails);
  const champions = useSelector((state: RootStore) => state.champions);
  const champName = window.location.href.split("/")[4];
  useEffect(() => {
    dispatch(GetChampionDetails(champName));
  }, []);
  const splashArt = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`;

  return (
    <ChampionPageCont>
      {detailedData.loading === false ? (
        <div>
          <ChampionHeaderCont>
            <h1>{detailedData.championDetails?.id}</h1>
            <h2>{detailedData.championDetails?.title}</h2>
            <img src={splashArt} />
          </ChampionHeaderCont>
          <h3>Champion Info</h3>
          <ChampionDetailSection>
            <ChampionDetailCont>
              <h4>Lore</h4>
              <p>{detailedData.championDetails?.lore}</p>
            </ChampionDetailCont>
            <ChampionDetailCont>
              <h4>Blurb</h4>
              <p>{detailedData.championDetails?.blurb}</p>
            </ChampionDetailCont>
          </ChampionDetailSection>
          <h3>Tips</h3>
          <ChampionDetailSection>
            <ChampionDetailCont>
              <h4>Ally Tips</h4>
              {detailedData.championDetails?.allytips.map((tip) => (
                <p>{tip}</p>
              ))}
            </ChampionDetailCont>
            <ChampionDetailCont>
              <h4>Enemy Tips</h4>
              {detailedData.championDetails?.enemytips.map((tip) => (
                <p>{tip}</p>
              ))}
            </ChampionDetailCont>
          </ChampionDetailSection>
          <h3>Stats</h3>
          <ChampionDetailSection>
            <ChampionDetailCont>
              <div>
                <p>
                  <b>Attack Damage: </b>
                  {detailedData.championDetails?.stats.attackdamage}
                </p>
                <p>
                  <b>Attack Per Lvl:</b>
                  {detailedData.championDetails?.stats.attackdamageperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>HP: </b>
                  {detailedData.championDetails?.stats.hp}
                </p>
                <p>
                  <b>HP Per Lvl:</b>
                  {detailedData.championDetails?.stats.hpperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>MP: </b>
                  {detailedData.championDetails?.stats.mp}
                </p>
                <p>
                  <b>MP Per Lvl:</b>
                  {detailedData.championDetails?.stats.mpperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>Armor: </b>
                  {detailedData.championDetails?.stats.armor}
                </p>
                <p>
                  <b>Armor Per Lvl:</b>
                  {detailedData.championDetails?.stats.armorperlevel}
                </p>
              </div>
            </ChampionDetailCont>
            <ChampionDetailCont>
              <div>
                <p>
                  <b>SpellBlock: </b>
                  {detailedData.championDetails?.stats.spellblock}
                </p>
                <p>
                  <b>SpellBlock Per Lvl: </b>
                  {detailedData.championDetails?.stats.spellblockperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>HP Regen: </b>
                  {detailedData.championDetails?.stats.hpregen}
                </p>
                <p>
                  <b>HP Regen Per Lvl: </b>
                  {detailedData.championDetails?.stats.hpregenperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>MP Regen: </b>
                  {detailedData.championDetails?.stats.mpregen}
                </p>
                <p>
                  <b>MP Regen Per Lvl: </b>
                  {detailedData.championDetails?.stats.mpregenperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>Crit: </b>
                  {detailedData.championDetails?.stats.crit}
                </p>
                <p>
                  <b>Crit Per Lvl: </b>
                  {detailedData.championDetails?.stats.critperlevel}
                </p>
              </div>
            </ChampionDetailCont>
            <ChampionDetailCont>
              <div>
                <p>
                  <b>Attack Speed: </b>
                  {detailedData.championDetails?.stats.attackspeed}
                </p>
                <p>
                  <b>Attack Speed Per Lvl: </b>
                  {detailedData.championDetails?.stats.attackspeedperlevel}
                </p>
              </div>
              <div>
                <p>
                  <b>Attack Range: </b>
                  {detailedData.championDetails?.stats.attackrange}
                </p>
                <p>
                  <b>Move Speed: </b>
                  {detailedData.championDetails?.stats.movespeed}
                </p>
              </div>
            </ChampionDetailCont>
          </ChampionDetailSection>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </ChampionPageCont>
  );
};

export default ChampionPage;
