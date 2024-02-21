from bs4 import BeautifulSoup
import json

# Your HTML content
html_content = """
<table border="1" width="100%" cellspacing="1" cellpadding="1">
    <colgroup>
      {" "}
      <col width="12%" /> <col width="19%" /> <col width="13%" />{" "}
      <col width="16%" /> <col width="20%" /> <col width="20" />{" "}
    </colgroup>
    <tbody>
      <tr>
        <td class="style10" colspan="6" bgcolor="#CCCCCC" height="12">
          <div class="style5" align="center">
            <strong>HEAT SHRINK TUBING</strong>
          </div>
          <div align="center"></div>
          <div align="center"></div>
          <div align="center"></div>
          <div align="center"></div>
        </td>
      </tr>
      <tr bgcolor="#CCCCCC">
        <td class="style10" width="13%" height="12">
          <div style="text-align: center;" align="center">
            <strong> PART #</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="22%">
          <div align="center">
            <strong>DESCRIPTION</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="13%">
          <div align="center">
            <strong>OPERATING TEMPERATURE</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
          <div align="center">
            <strong>AMS/ASTM</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
          <div align="center">
            <strong>MIL-SPEC</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="16%">
          <div align="center">
            <strong>U/L CSA</strong>
          </div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP33PO.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>IP33PO</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Standard Wall Polyolefin</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 135°C</div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
           AMS 3636 / ASTM 3637
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/5 Class 1,2 &amp; 3</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP29CG-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP29CG
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Commercial Grade Poly</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 105°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP33TW-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>IP33TW</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Thin Wall Polyolefin</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 135°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L &amp; CSA</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP49VP-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>IP49VP</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Very Flexible Polyolefin</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 135°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3587</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">MIL-R-46846, Type V</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L &amp; CSA</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP34SR.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP34SR
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Semi Rigid Polyolefin</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 135°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">ASTM D 2671</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/6 Class 1 &amp; 2</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L &amp; CSA</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP42MW.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP42MW
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Melt Wall Polyolefin</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 100°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3634</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/4 Class 1</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP44A2-IP45A3.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP44A2
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">2:1 Polyolefin W/Adhesive</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 110°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/4 Class 2</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP44A2-IP45A3.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP45A3
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">3:1 Polyolefin W/Adhesive</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 110°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/4 Class 3</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP46MD-IP47HV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP46MD
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Med Wall Adhesive Tubing</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 110°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/15 Class 2</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="16%">
           U/L
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP46MD-IP47HV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP47HV
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Heavy Wall Adhesive Tubing</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 110°oC</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/15 Class 1</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="16%">
           U/L
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP53MP-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP53MP
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Medical Grade</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 121°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">USP Class VI, ISO 10993-5, USFDA</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP30HS-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP30HS
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Standard Wall PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-20°C to 105°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">ASTM D 3150</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/2 Class 2</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP30HS-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP30HW
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Heavy Wall PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-20°C to 105°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td
          class="style10"
          style="text-align: center;"
          bgcolor="#FFFFCC"
          width="13%"
          height="12"
        >
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/06/IP32IP_Irradiated_Heat_Shrink_PVC.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP32IP
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="22%">
          <div align="center">Irradiated PVC</div>
        </td>
        <td class="style10" style="text-align: center;" width="13%">
          <div align="center">-20°C to 105°C</div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
           ASTM D 3150
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/2 Class 1</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Layflat-PVC-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP3LF
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Layflat PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-20°C to +100°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP37SH-IP36TH-IP39LH-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP36TH
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Thin Wall PTFE</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-250°C to 260°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3585</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/12 Class 3</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP37SH-IP36TH-IP39LH-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP37SH
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Standard Wall PTFE</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-250°C to 260°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3586</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/12 Class 2</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP38FE-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP38FE
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">FEP</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 200°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/11 Class 1 &amp; 2</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP37SH-IP36TH-IP39LH-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP39LH
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Light Wall PTFE</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-250°C to 260°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/12 Class 4</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP35KY.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP35KY
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Kynar</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 175°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3632C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/8</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP48MH-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP48MH
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Mylar</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-60°C to +150°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/7 Class 2</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP41NE-IP43VT.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP41NE
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Neoprene</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-70°C to +121°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3623</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/1 Class 1 &amp; 2</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP56DR-Diesel-Resistant.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP56DR
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Diesel Resistant</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-75°C to +120°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/16</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2020/08/IP41NE-IP43VT.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP43VT
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Fluoroelastomer</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 200°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M23053/13</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2018/08/IP55FL.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP55FL
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Fluoropolymer</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 150°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3632C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M23053/18</div>
          <div align="center">
            <span style="color: #999999;">(QPL product upon request)</span>
          </div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP52EC-plugged-cap-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP52EC
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">End Caps</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to 110°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" colspan="6" bgcolor="#CCCCCC" height="12">
          <div class="style5" align="center">
            <strong>NON-SHRINK TUBING</strong>
          </div>
          <div align="center"></div>
          <div align="center"></div>
          <div align="center"></div>
          <div align="center"></div>
        </td>
      </tr>
      <tr bgcolor="#CCCCCC">
        <td class="style10" width="13%" height="12">
          <div style="text-align: center;" align="center">
            <strong> PART #</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="22%">
          <div align="center">
            <strong>DESCRIPTION</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="13%">
          <div align="center">
            <strong>OPERATING TEMPERATURE</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
          <div align="center">
            <strong>AMS/ASTM</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
          <div align="center">
            <strong>MIL-SPEC</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="16%">
          <div align="center">
            <strong>U/L CSA</strong>
          </div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP17TW-IP18SW-IP19LW-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP17TW
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Thin Wall TFE</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-275°F to 500°F</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3655</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M22129C</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP17TW-IP18SW-IP19LW-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP18SW
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Standard Wall TFE</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-275°F to 500°F</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3653B</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M22129C</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP17TW-IP18SW-IP19LW-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP19LW
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Light Wall TFE</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-275°F to 500°F</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3654</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M22129C</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP10EX-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP10EX
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Standard Wall PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-20°C to 105°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">AMS 3631 / ASTM D 922</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M631D Grade C</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP10EX-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>IP11HW</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Heavy Wall PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-20°C to 105°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1 &amp; CSA OFT</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP15PV-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP15PV
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Fractional Wall PVC</div>
        </td>
        <td class="style10" width="13%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">FDA GRADE</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP12GA-IP1274-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP1274
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Low Temperature PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-68°C to 85°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%">
          <div align="center">M7444 Type 1 &amp; 3 / M22076</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP12GA-IP1274-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP12GA
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">General Purpose PVC</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-55°C to +90°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">ASTM D 922</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M631D Grade A &amp; B</div>
        </td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP64FS-IP65VC-IP66AC-IP67SC-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP64FS
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Heat Treated Fiberglass</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">up to 1200°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP64FS-IP65VC-IP66AC-IP67SC-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP65VC
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Vinyl Coated Fiberglass</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">up to 130°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">ASTM D 372, Class C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M3190 / M21557</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L &amp; NEMA TF-1</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP64FS-IP65VC-IP66AC-IP67SC-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP66AC
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Acrylic Coated Fiberglass</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">up to 155°C</div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
           ASTM D 372, Class F
        </td>
        <td class="style10" width="18%">
          <div align="center">M3190</div>
        </td>
        <td class="style10" style="text-align: center;" width="16%">
          U/L &amp; NEMA TF-1
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP64FS-IP65VC-IP66AC-IP67SC-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP67SC
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Silicone Coated Fiberglass</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-70°C to 200°C</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">ASTM D 372, Class H</div>
        </td>
        <td class="style10" width="18%">
          <div align="center">M3190</div>
        </td>
        <td class="style10" width="16%">
          <div align="center">U/L &amp; NEMA TF-1</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP61ES-IP62EF-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP61ES
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Expandable Polyester</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">Rated for 125°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L &amp; CSA</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP61ES-IP62EF-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP62EF
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">FR Expandable Polyester</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">Rated for 125°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L VW-1</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/06/IP63ES-Roundit2000.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP63ES
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Roundit®</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">Rated for 125°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/08/IP71NS-IP72PS-IP73PP-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP71NS
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Nylon Slit Loom</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-40°C to +125°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" style="text-align: center;" width="16%">
           U/L 94
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/08/IP71NS-IP72PS-IP73PP-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP72PS
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Polyethylene Slit Loom</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-40°C to +85°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" style="text-align: center;" width="16%">
           U/L 94
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/08/IP71NS-IP72PS-IP73PP-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP73PP
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Polypropylene Slit Loom</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-40°C to +125°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%">
          <div align="center">U/L 94 V-2</div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP13SP-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP13SP
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Spiral Wrap</div>
        </td>
        <td class="style10" width="13%">
          <div align="center">-76°C to 101°C</div>
        </td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="16%"></td>
      </tr>
      <tr bgcolor="#CCCCCC">
        <td class="style10" colspan="6" height="12">
          <div class="style5" align="center">
            <strong>SPECIALTY PRODUCTS &amp; SERVICES</strong>
          </div>
          <div align="center"></div>
          <div align="center"></div>
          <div align="center"></div>
          <div align="center"></div>
        </td>
      </tr>
      <tr bgcolor="#CCCCCC">
        <td class="style10" width="13%" height="12">
          <div style="text-align: center;" align="center">
            <strong> PART #</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="22%">
          <div align="center">
            <strong>DESCRIPTION</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="13%">
          <div align="center">
            <strong>OPERATING TEMPERATURE</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
          <div align="center">
            <strong>AMS/ASTM</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="18%">
          <div align="center">
            <strong>MIL-SPEC</strong>
          </div>
        </td>
        <td class="style10" style="text-align: center;" width="16%">
          <div align="center">
            <strong>U/L CSA</strong>
          </div>
        </td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Adhesives-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                IP75AD
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Adhesives</div>
        </td>
        <td class="style10" width="13%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" align="center" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/IP69HT-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>IP69HT</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Heat Shrink Polyolefin Tape</div>
        </td>
        <td class="style10" width="13%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" align="center" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Markers-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Markers</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Identification Markers</div>
        </td>
        <td class="style10" width="13%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" align="center" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Tubing-Kits-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Tubing Kits</strong>
            </a>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Tubing Kits</div>
        </td>
        <td class="style10" width="13%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" align="center" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" bgcolor="#FFFFCC" width="13%" height="12">
          <div align="center">
            <strong>
              <a
                href="http://www.insulationproducts.com/wp-content/uploads/2016/06/Value-Added.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Value-Added
              </a>
            </strong>
          </div>
        </td>
        <td class="style10" width="22%">
          <div align="center">Value-Added Services</div>
        </td>
        <td class="style10" width="13%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" width="18%"></td>
        <td class="style10" align="center" width="16%"></td>
      </tr>
      <tr>
        <td class="style10" align="center" bgcolor="#FFFFCC" height="12">
          <strong>
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Non-Metallic-Tubing-CT-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Non-Metallic Conduit Tubing
            </a>
          </strong>
        </td>
        <td class="style10" align="center">
          Flexible, Non-Metallic Electrical Tubing
        </td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10" align="center">
          U/L
        </td>
      </tr>
      <tr>
        <td class="style10" align="center" bgcolor="#FFFFCC" height="12">
          <strong>
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Non-Metallic-90-Connector-CC90-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              90° Conduit Connectors
            </a>
          </strong>
        </td>
        <td class="style10" align="center">
          90° Non-Metallic Conduit Connectors, Liquid-Tight
        </td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10" align="center">
          U/L
        </td>
      </tr>
      <tr>
        <td class="style10" align="center" bgcolor="#FFFFCC" height="12">
          <strong>
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Non-Metallic-Straight-Connector-CCS-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Straight Conduit Connectors
            </a>
          </strong>
        </td>
        <td class="style10" align="center">
          Straight Flexible, Non-Metallic, Electrical Tubing Connectors,
          Liquid-Tight
        </td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10" align="center">
          U/L
        </td>
      </tr>
      <tr>
        <td class="style10" align="center" bgcolor="#FFFFCC" height="12">
          <strong>
            <a
              href="http://www.insulationproducts.com/wp-content/uploads/2016/07/Non-Metallic-Coupling-CC-2016.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Couplings
            </a>
          </strong>
        </td>
        <td class="style10" align="center">
          Non-Metallic Conduit Coupling, Liquid-Tight
        </td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10"></td>
        <td class="style10" align="center">
          U/L
        </td>
      </tr>
    </tbody>
  </table>
"""

# Parse the HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Initialize an empty list to hold the part data
part_data = []

# Find all table rows
rows = soup.find_all('tr')[2:]  # Skip the header rows

for row in rows:
    # Extract columns from this row
    cols = row.find_all('td')
    
    # Check if the row has exactly six columns
    if len(cols) == 6:
        # Extract the data
        part_id = cols[0].text.strip()
        description = cols[1].text.strip()
        operating_temp = cols[2].text.strip()
        ams = cols[3].text.strip()
        mil = cols[4].text.strip()
        ul = cols[5].text.strip()
        
        # Check for QPL text
        qpl = "(QPL product upon request)" in cols[4].text

        # Extract SpecSheet link
        spec_sheet_link_tag = cols[0].find('a')
        spec_sheet = spec_sheet_link_tag['href'].split('/')[-1] if spec_sheet_link_tag else ""

        # Create the part dictionary
        part_dict = {
            "SpecSheet": spec_sheet,
            "PartID": part_id,
            "Description": description,
            "OperatingTemp": operating_temp,
            "AMS": ams,
            "MIL": mil,
            "QPL": qpl,
            "UL": ul,
        }

        # Add the part dictionary to the list
        part_data.append(part_dict)
    else:
        print(f"Row skipped due to unexpected number of columns: {len(cols)}")

# Serialize the part_data to a JSON formatted string
part_data_json = json.dumps(part_data, indent=2)

# Write the JSON string to a new file
with open('partData.json', 'w') as file:
    file.write("const partData = ")
    file.write(part_data_json)
    file.write(";")

print("Data written to partData.json")
