import React from "react";
import "./footer.css";
import GridSns from "../button/gridsns";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="grid">
          <img
            src={`${import.meta.env.BASE_URL}assets/footer/tourism.svg`}
            alt="tourism_img"
            className="img"
          />

          <div className="grid-section">
            <div className="tittle">{t('footer.more-about')}</div>
            <div className="isi">
              <button>{t('footer.overview')}</button>
              <a
                href="https://www.itc.gov.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.halal')}
              </a>
            </div>
          </div>

          <div className="grid-section">
            <div className="tittle">{t('footer.contact')}</div>
            <div className="isi">
              <button>{t('footer.address')}</button>
              <button>{t('footer.enquiries')}</button>
            </div>
          </div>

          <div className="grid-section">
            <div className="tittle">{t('footer.follow')}</div>
            <GridSns />
          </div>

          <div className="grid-section">
            <div className="tittle">{t('footer.deals')}</div>
            <div className="isi">
              <button>{t('footer.deals-1')}</button>
              <button>{t('footer.packages')}</button>
            </div>
          </div>

          <div className="grid-section">
            <div className="tittle">{t('footer.hyperlinks')}</div>
            <div className="isi">
              <a
                href="https://www.tourism.gov.my/promotional-kit/photos"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.gallery')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );P

};

export default Footer;
