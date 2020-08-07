import React from 'react';

const Settings = () => {
  
    return(
    
    <div className="settings-cont">
        <h1>Settings</h1>
        <div class="row">
            <div class="rover-primary-col rover-single-col col-center
                col-md-10 col-lg-7 margin-top-x5
            ">
                <div class="rover-primary-content-block">
                    <header class="rover-page-header">
                    </header>
                    <div class="new-design js-alerts-container"></div>
                    <form method="POST" name="account_info_form" enctype="multipart/form-data"
                    class="js-account-info-form" novalidate="novalidate">
                        <div class="account-profile-section-header margin-bottom-x5">
                    
                        </div>
                        <div class="row margin-top-x4">
                            <div class="col-lg-12">
                                 <h5 class="ssu-form-header"><strong>Add your address</strong></h5>
                                <input type="hidden" name="csrfmiddlewaretoken" value="6gh5xe1GqY51AbV6fIwpY4AYfUHD2TDP"
                                />
                                <div class="row">
                                    <div class="col-12">
                                        <div id="div_id_account_information-address_line1" class="form-group">
                                            <label for="id_account_information-address_line1" class="form-control-label  requiredField">Address line 1<span class="asteriskField">*</span> 
                                            </label>
                                            <div class="controls ">
                                                <input class="textinput textInput form-control" id="id_account_information-address_line1"
                                                maxlength="50" name="account_information-address_line1" required="required"
                                                type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div id="div_id_account_information-address_line2" class="form-group">
                                            <label for="id_account_information-address_line2" class="form-control-label ">Address line 2</label>
                                            <div class="controls ">
                                                <input class="textinput textInput form-control" id="id_account_information-address_line2"
                                                maxlength="50" name="account_information-address_line2" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" split="[4, 4, 4]">
                                    <div class="col-md-4">
                                        <div id="div_id_account_information-city" class="form-group">
                                            <label for="id_account_information-city" class="form-control-label  requiredField">City<span class="asteriskField">*</span> 
                                            </label>
                                            <div class="controls ">
                                                <input class="textinput textInput form-control" id="id_account_information-city"
                                                maxlength="75" name="account_information-city" required="required" type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div id="div_id_account_information-state" class="form-group">
                                            <label for="id_account_information-state" class="form-control-label  requiredField">State or province<span class="asteriskField">*</span> 
                                            </label>
                                            <div class="controls ">
                                                <select class="roverusstateorcaprovinceselect form-control" id="id_account_information-state"
                                                name="account_information-state" required="required">
                                                    <option value="" selected="selected">---------</option>
                                                    <option value="AL">Alabama</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="DC">District of Columbia</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="MP">Northern Mariana Islands</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VI">Virgin Islands</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WY">Wyoming</option>
                                                    <option value="">---------</option>
                                                    <option value="AB">Alberta</option>
                                                    <option value="BC">British Columbia</option>
                                                    <option value="MB">Manitoba</option>
                                                    <option value="NB">New Brunswick</option>
                                                    <option value="NL">Newfoundland and Labrador</option>
                                                    <option value="NT">Northwest Territories</option>
                                                    <option value="NS">Nova Scotia</option>
                                                    <option value="NU">Nunavut</option>
                                                    <option value="ON">Ontario</option>
                                                    <option value="PE">Prince Edward Island</option>
                                                    <option value="QC">Quebec</option>
                                                    <option value="SK">Saskatchewan</option>
                                                    <option value="YT">Yukon</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div id="div_id_account_information-zip" class="form-group">
                                            <label for="id_account_information-zip" class="form-control-label  requiredField">ZIP or postal code<span class="asteriskField">*</span> 
                                            </label>
                                            <div class="controls ">
                                                <input class="textinput textInput form-control" data-msg-pattern="Please enter a valid US ZIP code or Canadian postal code."
                                                data-msg-remote="Please enter a valid US ZIP code or Canadian postal code."
                                                data-rule-remote="/ajax/validate/zip_code/" id="id_account_information-zip"
                                                name="account_information-zip" pattern="(^\d{5}(?:-\d{4})?$)|(^([ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]\d[ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz])\s*(\d[ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz]\d)$)"
                                                required="required" type="text" value="3090" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                       
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="account-profile-section-header">
                                     <h3>Personal Information</h3>
                                    <p class="body-text text-muted">We won't share or display this on your profile.</p>
                                </div>
                                <input type="hidden" name="csrfmiddlewaretoken" value="6gh5xe1GqY51AbV6fIwpY4AYfUHD2TDP"
                                />
                                <div class="row">
                                    <div class="col-12">
                                        <div id="div_id_private_information-email" class="form-group">
                                            <label for="id_private_information-email" class="form-control-label  requiredField">Email<span class="asteriskField">*</span> 
                                            </label>
                                            <div class="controls ">
                                                <input class="emailinput form-control" id="id_private_information-email"
                                                name="private_information-email" required="required" type="email" value="youremail@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div id="div_id_private_information-birthdate" class="form-group">
                                            <label for="id_private_information-birthdate_month" class="form-control-label ">What is your birthday?</label>
                                            <div class="controls ">
                                                <div class="row birthdate-widget">
                                                    <div class="col-4">
                                                        <select class="birthdatewidget form-control" id="id_private_information-birthdate_month"
                                                        name="private_information-birthdate_month">
                                                            <option value="" selected="selected">Month</option>
                                                            <option value="1">January</option>
                                                            <option value="2">February</option>
                                                            <option value="3">March</option>
                                                            <option value="4">April</option>
                                                            <option value="5">May</option>
                                                            <option value="6">June</option>
                                                            <option value="7">July</option>
                                                            <option value="8">August</option>
                                                            <option value="9">September</option>
                                                            <option value="10">October</option>
                                                            <option value="11">November</option>
                                                            <option value="12">December</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-4">
                                                        <select class="birthdatewidget form-control" id="id_private_information-birthdate_day"
                                                        name="private_information-birthdate_day">
                                                            <option value="" selected="selected">Day</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-4">
                                                        <select class="birthdatewidget form-control" id="id_private_information-birthdate_year"
                                                        name="private_information-birthdate_year">
                                                            <option value="" selected="selected">Year</option>
                                                            <option value="2016">2016</option>
                                                            <option value="2015">2015</option>
                                                            <option value="2014">2014</option>
                                                            <option value="2013">2013</option>
                                                            <option value="2012">2012</option>
                                                            <option value="2011">2011</option>
                                                            <option value="2010">2010</option>
                                                            <option value="2009">2009</option>
                                                            <option value="2008">2008</option>
                                                            <option value="2007">2007</option>
                                                            <option value="2006">2006</option>
                                                            <option value="2005">2005</option>
                                                            <option value="2004">2004</option>
                                                            <option value="2003">2003</option>
                                                            <option value="2002">2002</option>
                                                            <option value="2001">2001</option>
                                                            <option value="2000">2000</option>
                                                            <option value="1999">1999</option>
                                                            <option value="1998">1998</option>
                                                            <option value="1997">1997</option>
                                                            <option value="1996">1996</option>
                                                            <option value="1995">1995</option>
                                                            <option value="1994">1994</option>
                                                            <option value="1993">1993</option>
                                                            <option value="1992">1992</option>
                                                            <option value="1991">1991</option>
                                                            <option value="1990">1990</option>
                                                            <option value="1989">1989</option>
                                                            <option value="1988">1988</option>
                                                            <option value="1987">1987</option>
                                                            <option value="1986">1986</option>
                                                            <option value="1985">1985</option>
                                                            <option value="1984">1984</option>
                                                            <option value="1983">1983</option>
                                                            <option value="1982">1982</option>
                                                            <option value="1981">1981</option>
                                                            <option value="1980">1980</option>
                                                            <option value="1979">1979</option>
                                                            <option value="1978">1978</option>
                                                            <option value="1977">1977</option>
                                                            <option value="1976">1976</option>
                                                            <option value="1975">1975</option>
                                                            <option value="1974">1974</option>
                                                            <option value="1973">1973</option>
                                                            <option value="1972">1972</option>
                                                            <option value="1971">1971</option>
                                                            <option value="1970">1970</option>
                                                            <option value="1969">1969</option>
                                                            <option value="1968">1968</option>
                                                            <option value="1967">1967</option>
                                                            <option value="1966">1966</option>
                                                            <option value="1965">1965</option>
                                                            <option value="1964">1964</option>
                                                            <option value="1963">1963</option>
                                                            <option value="1962">1962</option>
                                                            <option value="1961">1961</option>
                                                            <option value="1960">1960</option>
                                                            <option value="1959">1959</option>
                                                            <option value="1958">1958</option>
                                                            <option value="1957">1957</option>
                                                            <option value="1956">1956</option>
                                                            <option value="1955">1955</option>
                                                            <option value="1954">1954</option>
                                                            <option value="1953">1953</option>
                                                            <option value="1952">1952</option>
                                                            <option value="1951">1951</option>
                                                            <option value="1950">1950</option>
                                                            <option value="1949">1949</option>
                                                            <option value="1948">1948</option>
                                                            <option value="1947">1947</option>
                                                            <option value="1946">1946</option>
                                                            <option value="1945">1945</option>
                                                            <option value="1944">1944</option>
                                                            <option value="1943">1943</option>
                                                            <option value="1942">1942</option>
                                                            <option value="1941">1941</option>
                                                            <option value="1940">1940</option>
                                                            <option value="1939">1939</option>
                                                            <option value="1938">1938</option>
                                                            <option value="1937">1937</option>
                                                            <option value="1936">1936</option>
                                                            <option value="1935">1935</option>
                                                            <option value="1934">1934</option>
                                                            <option value="1933">1933</option>
                                                            <option value="1932">1932</option>
                                                            <option value="1931">1931</option>
                                                            <option value="1930">1930</option>
                                                            <option value="1929">1929</option>
                                                            <option value="1928">1928</option>
                                                            <option value="1927">1927</option>
                                                            <option value="1926">1926</option>
                                                            <option value="1925">1925</option>
                                                            <option value="1924">1924</option>
                                                            <option value="1923">1923</option>
                                                            <option value="1922">1922</option>
                                                            <option value="1921">1921</option>
                                                            <option value="1920">1920</option>
                                                            <option value="1919">1919</option>
                                                            <option value="1918">1918</option>
                                                            <option value="1917">1917</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div id="div_id_private_information-gender" class="form-group">
                                            <label for="id_private_information-gender" class="form-control-label ">Gender (optional)</label>
                                            <div class="controls ">
                                                <select class="select form-control" id="id_private_information-gender"
                                                name="private_information-gender">
                                                    <option value="" selected="selected">---------</option>
                                                    <option value="m">Male</option>
                                                    <option value="f">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="padding-top-x5">
                            <div class="padding-top-x5">
                                <div class="text-center">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
  
export default Settings;