costumes "blank.svg";

%include inflator/assert
%include inflator/time

onflag {main;}
proc main {
    log AREA_BY_TZ(TIMEZONE());
}
