$tab_filter = $("#tab_filter a");
    $tab_filter.click(
            function(){
                $box = $("[data="+$(this).attr("data-tab")+"]");
                $("#flow .f_box").hide();
                $box.show();
                if($(this).attr("data-tab") == "tab0"){
                    $box = $("#flow .f_box");
                    $box.show();
                }
            }
    );
