import React from "react";
import Layout from "../Layout/Layout";

const MarketingPlan = () => {
  return (
    <Layout>
      <section
        class="campaign_progress_section marketing_page_section"
        id="marketing_page"
      >
        <div class="campaign_progress_header">
          <div class="header_logo_part">
            <a>
              <span>Vos campagnes</span>
            </a>
          </div>
          <div class="marketing_list_download">
            <a>
              <span>Dealership</span>
              <select>
                <option>Audi France</option>
              </select>
            </a>
            <button>
              <i class="fas fa-download"></i>
            </button>
          </div>
        </div>
        <div class="marketing_page_detail">
          <div class="marketing_page_container">
            <div class="marketing_page_excel_sheet">
              <div class="marketing_page_excel_sheet_main">
                <div class="marketing_page_excel_data">
                  <div class="marketing_page_year_box">
                    <select>
                      <option>2021</option>
                    </select>
                  </div>
                  <div class="marketing_page_properties_box">
                    <p>Partenariats</p>
                  </div>
                  <div class="marketing_page_properties_box">
                    <p>Partenariats</p>
                  </div>
                  <div class="marketing_page_properties_box">
                    <p>Partenariats</p>
                  </div>
                </div>
                <div class="marketing_page_excel_detail">
                  <div class="marketing_page_year_box excel_detail_header">
                    <h5>Janvier</h5>
                    <div class="excel_detail_header_list">
                      <div class="excel_detail_header_list_box">
                        <p>S1</p>
                      </div>
                      <div class="excel_detail_header_list_box">
                        <p>S2</p>
                      </div>
                      <div class="excel_detail_header_list_box">
                        <p>S3</p>
                      </div>
                      <div class="excel_detail_header_list_box">
                        <p>S4</p>
                      </div>
                      <div class="excel_detail_header_list_box">
                        <p>Actions over the whole month</p>
                      </div>
                    </div>
                  </div>
                  <div class="marketing_page_excel_detail_body">
                    <div class="marketing_page_excel_detail_body_box">
                      <div class="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i class="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box">
                      <div class="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i class="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div class="marketing_page_excel_detail_body_box">
                      <div class="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i class="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                  </div>

                  <div class="marketing_page_excel_detail_body">
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box">
                      <div class="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i class="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                  </div>
                  <div class="marketing_page_excel_detail_body">
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box">
                      <div class="excel_detail_body_box_data">
                        <h3>Advertising on radio</h3>
                        <span>result: </span>
                        <a>
                          <i class="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                    <div class="marketing_page_excel_detail_body_box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingPlan;
