 <script language="javascript">
        function checkDigit(mid){
            document.getElementById('results').innerHTML = "";
            document.getElementById('resultsRow').style.display = "none";
            var msg = "";
            var valid = false;
            var chunk = "";
            var midArr = [];
            var altMid = "";
            
            if (!isNaN(mid) && (mid.length == 8 || mid.length == 15)) {
                if (mid.substr(0, 5) == "19277") {
                    altMid = mid;
                }
               
                    if (mid.substr(0, 4) == "4301" || mid.substr(0, 4) == "4625" || mid.substr(0,4) == "5301" || mid.substr(0,4) == "5421" ){
                        valid = true;
                        chunk = mid.substr(6, 9); //7th char to end
                        //4301352353873124
                    }//end if
                    //    //This section applies to banks (3891, 3892, 3896, 19270)
                    else if (mid.substr(0, 4) == "3891" || mid.substr(0,4) == "3892" || mid.substr(0,4) == "3896"  || mid.substr(0,5) == "19270" || mid.substr(0, 5) == "19277"){
                        valid = true;
                        chunk = mid.substr(8, 7); //9th char to end
                    }//end else if

                    //// //This section applies to bank 1050.
                    else if (mid.substr(0,3) == "500" || mid.substr(0,3) == "520") {
                        valid = true;
                        altMid = "";
                        chunk = mid.substr(3,5);
                    }

                else{
                   valid = false;
                    chunk = "";
                   // alert("This program is not designed to handle this merchant number. Calculates for the following: Legacy BAC, Fleet, Net New, and NPC (Banks 3891, 3892, 3894, 3895 (Capital One), 3897)")
                }//end else if

                if(valid == true && mid.length == 15 || valid == true && mid.length == 8){
                   
                    chunk_split_count = 0;
                    chunk_size = chunk.length;
                    pos = 0;
                    mult = 2;
                    chunk_arr = new Array()


                    while (chunk_split_count < chunk_size) {
                        slice = chunk.substr(pos, 1)
                        slice = slice * mult

                        chunk_arr[chunk_split_count] = slice

                        if (mult == 2) {
                            mult = 1
                        }//end if
                        else if (mult == 1) {
                            mult = 2
                        }//end else if
                        pos++
                        chunk_split_count++
                    }//end while

                    lump = "";
                    chunk_arr_count = chunk_arr.length;

                    for (var idx = 0; idx < chunk_arr_count; idx++) {
                        lump = lump + chunk_arr[idx]
                    }//end for

                    lump_size = lump.length
                    lump_count = 0
                    sum = 0;

                    while (lump_count < lump_size) {
                        lump_slice = lump.substr(lump_count, 1)
                        sum = sum * 1
                        lump_slice = lump_slice * 1
                        sum = sum + lump_slice
                        lump_count++
                    }//end while

                    sum = sum.toString()
                    end = sum.substr((sum.length - 1), 1);
                    sum = sum * 1
                    mod = (sum + (10 - end)) - sum;

                    if (mod == 10) {
                        mod = 0;
                    }//end if

                    mid = mid + mod;
                      
                    midArr.push(mid);

                    document.getElementById('resultsRow').style.display = "block";
                    document.getElementById('results').innerHTML = midArr[0];
                      
                    if (altMid.substr(0, 5) == "19277") {
                        valid = true;
                        chunk = altMid.substr(6,9)
                        chunk_split_count = 0;
                        chunk_size = chunk.length;
                        pos = 0;
                        mult = 2;
                        chunk_arr = new Array()


                        while (chunk_split_count < chunk_size) {
                            slice = chunk.substr(pos, 1)
                            slice = slice * mult

                            chunk_arr[chunk_split_count] = slice

                            if (mult == 2) {
                                mult = 1
                            }//end if
                            else if (mult == 1) {
                                mult = 2
                            }//end else if
                            pos++
                            chunk_split_count++
                        }//end while

                        lump = "";
                        chunk_arr_count = chunk_arr.length;

                        for (var idx = 0; idx < chunk_arr_count; idx++) {
                            lump = lump + chunk_arr[idx]
                        }//end for

                        lump_size = lump.length
                        lump_count = 0
                        sum = 0;

                        while (lump_count < lump_size) {
                            lump_slice = lump.substr(lump_count, 1)
                            sum = sum * 1
                            lump_slice = lump_slice * 1
                            sum = sum + lump_slice
                            lump_count++
                        }//end while

                        sum = sum.toString()
                        end = sum.substr((sum.length - 1), 1);
                        sum = sum * 1
                        mod = (sum + (10 - end)) - sum;

                        if (mod == 10) {
                            mod = 0;
                        }

                        altMid = altMid + mod;
                        midArr.push(altMid)

                        if (midArr[0].substr(0,5) == "19277" ) {
                                document.getElementById('orAlt').innerHTML = 'or';
                                document.getElementById('result2').innerHTML = midArr[1];
                        }
                    }
                    else  {
                        document.getElementById('orAlt').innerHTML = "";
                        document.getElementById('result2').innerHTML = "";
                       
                        }
                    
                }//end if                     
                else{
				    alert("This program is not designed to handle this merchant number. * Note - Calculates for the following Banks: 1049,1050,1922,1923,1924,1925,1927,3891,3892,3896.")
                }//end else             

			}//end if
			else{
				var errorMsg = "";
				if(isNaN(mid)){
					errorMsg += "\n   - The MID submitted contained non-numeric characters!";
				}//end if
				if(mid.length < 8){
					errorMsg += "\n   - The MID submitted was shorter than 8 digits!";
				}//end if
				else if(mid.length > 15){
					errorMsg += "\n   - The MID submitted was longer than 15 digits!";
				}//end if

				alert("Something went wrong! Please check what you keyed in!\n"+errorMsg);
			}//end else

        }//end function
        function clearVals(result2) {
            document.getElementById('result2').innerHTML = "";
            
        }
    </script>
