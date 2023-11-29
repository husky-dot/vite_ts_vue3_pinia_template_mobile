<template>
  <div
    class="home-wrapper bg-cover bg-center bg-no-repeat w-screen h-screen min-w-[360px] min-h-[768px] bg-yellow-50 overflow-hidden"
    :style="{ backgroundImage: `url(${getImgFile('home_bg.png')})` }"
  >
    <div class="w-full h-full overflow-hidden">
      <div class="w-full h-[90%]">
        <div class="sm:hidden h-full flex flex-col">
          <div class="flex justify-center">
            <div class="mobile-portrait-icon-bar desktop-bar -mt-4 grid">
              <a href="#">
                <img class="cursor-default" :src="getImgFile('home_followus.png')" alt="" />
              </a>
              <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsTwitter" target="_blank">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzgzNTBBOTlBMTFFOTlBMDFEMjE1MTVDMURCMTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzgzNEZBOTlBMTFFOTlBMDFEMjE1MTVDMURCMTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkYwMDU4ODc3NEM0MTFFOEI5MkZEQTFBQUQ3QTRCMTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkYwMDU4ODg3NEM0MTFFOEI5MkZEQTFBQUQ3QTRCMTQiLz4gPC9yZGY6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"
                  alt="Twitter"
                />
              </a>
              <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsFacebook" target="_blank">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQwQkQyNDRBOTk5MTFFOUI1NkNFQTQ4Mzk3MUEyMjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQwQkQyNDNBOTk5MTFFOUI1NkNFQTQ4Mzk3MUEyMjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM3QTVGMDM3NEM0MTFFODk4OTA4NDNBNkRGNUZGN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM3QTVGMDQ3NEM0MTFFODk4OTA4NDNBNkRGNUZGN0YiLz4gPC9yZGY6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"
                  alt="Facebook"
                />
              </a>
              <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsInstagram" target="_blank">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEIzMEMxRTdBOTlBMTFFOTg2MzlDNTZCRjYxOTRFOEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEIzMEMxRTZBOTlBMTFFOTg2MzlDNTZCRjYxOTRFOEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0FCQkZGN0U3NEM1MTFFODg2RUJFRTYwN0Q4RUM3NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0FCQkZGN0Y3NEM1MTFFODg2RUJFRTYwN0Q4RUM3NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4H3yX7AAAZPUlEQVR42uxcabRlRXX+qs5wxzf3e6+7X89zN9AMDiBBZBTEASJrETE4LFFRY1ygcVgmy7WiUVyiyULBRI0aWGDApYhDEIGIBBmVoVVM0/aE/Xru12++0zmnKntX1bnD6yZDYy4/vBeqzz33nnNuna++vfe3d9V5QmuNzusP95IdCDqAdgDtANp5dQDtANoBtPPqANoBtANo59UBtANoB9A/5pd/rCfe8ubbzDYjY+yp9OL3ST9Ceg9oQNDnSHAok3vJhJ/dmEO0csYPFs16Yb/WyMeeDIXmo7RKryds1UvT55BaC26eUvTejLqSWpnPg1gJj36Dj5f2WLhzzL55b74XkIqukSCh/YoPNSOhDggldsPTW3I6+qVOsMMXCnw9/j/xBPqKU+jyKoiUhyu+9ab2Adr8Yij4hrJJjJkwWLgnX3zvbBhcVvKCNYpgiwiCQCWmSULHV3wDFhQhYN8TtHxjfB0G0qNDPAuiAcpT2oHXANJuwcDVP/MUGgC79wQibT3a+vZ8+h2tJaRQP4eX3KQy0T9LvgCP8YvF0GYwQwIgoJvfVey6Zl8h/+mK9HIMQLYWudG3LKKt5lujLeFITVtmcvO4QVvgeEtHGZamwKm5QNpjU4DNgMxhLAPJoFpgLcDS2kFqSGdoBGegKq/WuehqnU/ue6GYviBAFf16DrFh3e8yPXdOZP2Ls7UEPUlk+mWadgyEsXEC0d6N+c6ABwOmb0C1jPRgABStzNMtYErHNANSytQ6+I6lquEGbKv3KnU0dAU6uCqP0+XMvUpFHxZF9XlLkzYDyj+ZExEqKsAvwuEHpoR/Zt9sxdwUUiBT4GBZY0FtgMkg+XDsrIPZZOJK191A3dyVHYCjmXsDWAcg7Pu5IDa2timmtyTbGQuuS4J8kAxXrxVJmwHNyQh5EeP+6vIvjSaFMwcxY1FOzdh2tc7SOqipeTeDmG4dC80+rE/1dBOgTWB6c3ypSIGsw2T/awZQsKNJ3zcdabpN3wW+Qm1v8TPVbO3hbM/sA20FdLJWxA6dOXlnrfj+QTVrfGizKRt2OEbCgWkYxwxOEkTTVVSoJSVyD7TvGTYysIrMv8FW83lTUKqD6QKhdOBIAbeV8AKJTCFE2BXCzwX2CC2PYKaeu0+HUKBHvLfrjmouGmgroGNREduqxesz5C8LJJHSwCN0k1k7ecNbnz6oTlZxeHQKYaAxf0kBw6f0oG9+DsXeENmCh0xGIggEPLorTzQxzTEezVCk1kBAq1ghqSaIKzxQEcpjFczsmsHU9mlMPncYmXwGXYu6yNf77PibriJMfDL72u6LQCEse/0TY93voi++1jZAQ6+6BNXMK7sSq+OEu0FpzFzXQWA5oqME+7eMYWA4gwuuWIKTzluEFacMoDiY/38T2JpYPr5lAnt+vgc7frQTe+7fjWyRBm9xFw1Aw+S1dnZFzNYuaHkyQX5afKCtgI5Vs68TFRpNmdSFeSPoWKnkk62Wx8sY2zmBs9+yCm/44EYMrextS8YiCKD+tf2mHX/l8djx/a144pOPYfLX+9G3YdBKJ+M4uLes5HSqQ6DJnPI1ua6tJl+q+Gf6JNSFsAAaZlLUsAGIWEvapzxewuzeaVz5hdNwzrs2vKgp4fKLV2HkVYtw/9vvxp4f78K8E+dTnsbWJFtMX+nUYalqWwGVSbyWMg26gOKMw2pCbgwqfaarMap7DuPdN5yFUy9fe8T5+585iN2/HMXEcxOoEYuTSky3QKkr6VgkdEuJY3sqwrVuit3ORxObiIiQ5HBlxoMXUkZWJH88lCcWDmHhOSvNft1N9WZxwZ2X4N7XfheHfr4PvWsHoRPtzN2avnT6mlVwmwGNejP0m4FQjqFO2lB32NT3bt6PC/9i4xFgTlJQuvuj92DnA9sRT1URcD0g9OFL9l02GHGTaOTkqaZsgGuhtSg4cyVfrqjFlJ0lUQ3Cl+he3o91V52K4z90Rksfzv7O6/Gjjf+C6v5pZOYV6oNlmWo5q45xRc0xA+rrJC8ouksXiKw04gCVoHaoggUUxS/6m9Naztnz1F7cevEtKO2dwsL1Q8gv7HHSBzY7qgc11AdJiGYNmyYM0qWPwkV74wUhaCSiUhWzo+OIqzWUtu7HY391ByaeHMUZtzYKHX4uxMaPvxyPv/MeFOZl7cAIZ/pptD/GFPSYAfWUCgyghjmWpZ4mPUmsHd91GGf99WmgpKN+/MSuKdzyupsgqxFWv2wEIrJ603NMlM0gzpVdOv0uFejKFVUsAAZYyn9r5LNFpYqVl2+EzPs4+OA2TG09hK3fehiZvixedsMl9f4su+IEbL/hCUSHZhD259MhNZdSRqqJNgOK2DM3yWBqG5ToMxKbEfoHA5x8aaupP3TtTxHvGcfy05bCi5VJOet+14n0FEjZJLuAZvUgmjIvUU+CeJNUyY9Xyjj5a5di+HU2ANbIpB/6069DPr0H2258ACuuOBkD9PuG44GHRW9cjWf/9hHk+nOmkmjGRgsX99sMqNSJTEHwYE3dp1Yem8Hi4wfQt6q/fuzsgVmM3rsZC9cMwE+YmTCtlZmqoV2NXZNYnywhHp+FJr+IFFBOEfNZBP1FeGS6cL6ususQFr/j5XUwTRAa7sJJf38JHjz7BupZFb+/+fE6oPwaOHUhwgwHwJjchedcB/WknqK2EVAyc83s9EykT0y1iLel6RIGl69oOXb0P7Yh2juBgXXDJkU1qWTKzCaWm4hN+wyOKldQWDuEwTM3oLCsH34PsYiYXds/hdKWA5jeNIry9ilkF9F3vXmIWhnhQPbIBGQgjywFqLCnG5OP7CA1EcHLWleUX9GL7DCdU6mRi8jYhMkFQi1k24OSA5NrodoylPNwirDdw7mWY6e27EeoIqMIfG29ldekCpiQHonpeGIGMzv2Y965a7DkHWdg3nnrDROP9pp5ZhQHvvckRr/6M8w+s88Au4985aIrT0dmYSN52HntvabYkukrIqbBKFMqWlw7bGcbKMKHfSHiAzV47O8124U00wbtj/IiMaAw4wI2eQaY2RfHlJcHLccmU7NgUhh2wtU7dRqA6BZ8D9XRA1CVEjZ87hIsv+aC//H3i8ctMm3+ZS/F7z5yG8Z++BS8ni785rIvY9G7z4bsymKc3Mzh729C14p+JKRvk5kY8WS5EQe4gELBK45LprILN9Bke+2P8sxM34FpojVPW/A0h45MJ1teZL6hYSezWphqkUjrnBTaqr/fR+ogxkvufD/6zvy/ZXz5NQtx4p0fxLYP3Yzd1/8EtW0+tr7vFnIfgfGLxSX9pookaBT9JIKuRA23Rd8HWdKdRAJWKjbOWWmv9Ytg8qED0wBq/GBscvswbO2MqKbmzrpV1JMAZmpCQQezUzjlno+g5xWrWwscUYwD334IM0/tIHkzbZicWzaEnnOOR/fprcCv/MJboUtl7PvKAyhuXA2hHIrGjm3lhn08SJ+2BFeK9hyUJJLG/BisL20roIG2ANmtNh0iL2gA9eZcVcY1YrL1sdIVUgyopFlLO0ax7sa3HgHm2A8ex86P34rSM7uIbZRJ5Sh4kEJISBp5nwnRd/FLsOLGq8jHdtXPWfWPV6H81HOoks/OLFlgfsfqBm38IikTM0gtfQu5Tpu4mQbldKg0rqjNgPIspg1K1i8mpsPMAunNYSjdhGVx0pSiakSkS/tPX46R95zfmud/89/x7Ds+j7A4gN4TVhkzFOlUBqVTisT74dt+hsrT27Hh/k8jmN9XP3fp3/0Znn3NdVYKSc+ZsOUe9w+qFSghrcow2Z5mGJUpVh+rDj3mhQ5cabJgWqYacwYzNrYznc1JALsHr0r5umv83qtBHdqPBX9+esux049sxlYCs7hwBF0rF7jpZO1yfDvPFIQB+k46DtHmXdj+tn9oOb/7vBPJHayGOjBuMzj6beEAM7MFqrVv0pQfEyvdkLikQh0zQ48dUJdq+prZx9PF7CcjZAkof84MV+hXkclU4AcVBNT8sEIBbArFZTn0nXdCy7F7r7udAhgFm6EueFy8FtoC6bIqz3Vakibt2rAS0/f8AhM/eqzlGj0XboQ6PGmtxikJMLBWFLUCwGrFLNBQTsIl9QnB9gLKJm9ArFnAgipJowpymbKpeLcc65Nvpe9CAjLgFtQo5x5D18b5yKwaqR9Xo2gfPf0rdK8fNEzm45jJHg2URwMnlXJZmQtqZNKBCDF156Mtv1c4ZTm8DK83SRzrEltWZB86B1ADsogNU+vFcaj67G3bfGhGVMmM6YZpdD0vNlupqxBhifbnABpEdSDrE3cJZTnDhZbjapu3wysfRjhUIN9WM6s9QNFac8ROROO9tjyjZA1hLwn2HXtbf2+Q2F0k2cRyKLRzrzYrs+Y/l1HsW5mpJu3UNvVVGu0FlNnoGyBrBlBmpceA+jVTxW9lKAFKDPap1ScdfDo/M2fyO+FjiOE0AJz5MaBGDzKIis5KGFjiKG2F2Se/yhesRXMqN9LOJNQLN7Zm+nwZukjdAjFVGEhehCjPZs7myOZsAKURlorAJCbKo5h8kGGwara+yeZUoA5XplqVw6Jh+AUuNJchAm2mfhlQ4ZipeYkKgSV5+VfiihgzUwjmrWnVr1MlyDINXp92vpFDkq7XVeeavHATi3CzDwlrZdFmk2efyMyrs5P9kGZA6Ua81tHlY4w/pMaImgpVP6UFu7dCTUxB9nZbN7J+LWU+I4h2PgdvZLExbWakMXFmJNORWSotmIL1TfUgime1zlfVnt1NQM9SPwattnQ1W6kUjlhmoxMHZuKKg8oJe7Q3KDFApvk1Z861ummzk2+1QAsom7I5jre9IfTuLag9+XjT8FKq+KZLIPZupWsQ0+nakq7n+dxq9SZoX2YiqH3PIbO0F91XnNfye7M/fRpeNp1LsnLINn3UHF24IJSyNZ0XazOgFIV9F4kNUNRCjvjxEebiBYkB0wvJ5wa2eeQ//YJG7YG7WnPzy69A8fLLoDY9ROJ8hgCNjF824HpVCyZ9pvfthB7bjaEvfwzeQEPY13buR/knTyAY6XeguJUrwra5iAqXIbWswzLHtztTMmyJ6CYTY/JGz5G0UQwA5qZ3ygAq+XjZWG3kLZtPgH4XyZZ3wlvTMNvu6/8JIuej8v1v0w9lIAYW0DYPxBRcJmcR7zkI0b8AQ7ddj9xFZ7VOAl53K8T0JOSi+UYFMDNZaDUCzxxAlaovF2o0dcyrGo9dh4Y1yzYCyTRmIO+HFFAwtwDBy2tq5nvpGr/3ChJel4fSte8DoqTFCLs+eyN6brgJmfMvhNdHMkrNmgHxVy1G8QPvwdB930PuDa1lvtJdD6J8653Irl9AN1arR3VT+OCIzwlCMOeWWVpJOJaqJi3a7vKdRwCyebP+9LSJ7JIypoQEOZJKq8lnfev/yPQhdGPdKCu/pSPE0E0of+LNyF17e2vgO/ci0zQxTo2PkbkHkAsX4WgrjauPPoGJ934MwUIydVIKiqSUrnGqGbhAqKwUy7TWakUtNsHNLqRWsOiKFyH15AjPzfjH2Jo/vWeJJKKjAcomH9tBCFhwU6PjhUeCf90aJJt+jPIHL4Qa3XZk0OjqgbdkBYG5+Khglm6/HeNXvscEOn9BN2FCvtZZgkjX/Ss3xZJp4hCZu+bpDylbsqQXhaHGbBk8z84rCZZN7MjJXyKaaT02n6X8vkIMS9wKWG0m29xyDWOOHoGqdz6C6kfPh//Gq+Ff8HaIYvd/24f4t79G6ZtfQeWHd1N2NALR008A0e94bgljaBmjWPcn1EdKR0WhMe+kKqQUyjVT5G7SUfWZ1vZOIwc2/+XGQYlXrnBgQoY6PnuoFdB58+nGiDWcknq6qeNoWqTLBc1V0IfHEN/8USQ/uwXexnMgVr8UYv5yiHy3WVeqDh+A2rEF8ZOPIvrFo+QKZkm/0nlc7o5q0IFvgmI6h88Lv9h646hqpkX8RfMaidnEDAW5EgHvNwKTtrVTtB1QzwHq2cYyw+i3Al1ybGcroBtON2wTvP6KOp/6Uee44HS1DQz9PRC9PdATexH/+IvAXXR8to9Efc4co2ZKRrSD9r3+hfCGhqBjAjpmxeGZa9oCvTDGwOUAXu+jDx1A5tWnwR9osD7edQjJgQlzDVOMTolqAli75+UZSJ/BjE3lvQ5oX5EE92/IsU2TqLTVdLnsBMhVJ0PveIiC0Cr7yIZoMjHtFm6YZd+8TonMtb8XuqfXSCVQ4NAxnaNI/hTos+Ehc4KKOQWtmbkh4S5oXKYvDKjCuE5pXShZTdcbX9EayH61kxg+Q4FsAdLVTXgBixxeUFAik1cWUGV8owyUWf0ruvJktptNkGkZuTdcQyCXCJxZc8PwFZf9qdF7LoDyPJTZ0o2RH7aNbi1Dn/Gy7jzp0bxv9/lcdjO+/W12JUZt+KnFkG8n/w7+jq4T/eczyL1iLbouO7d1Kvrffgm/u+AGt2HmAsdu8scMqPAQ2YhNzORCRsAaj6OoMLoxeeTrrT908mvgv+1a6AMUxSuHCJiskTD1liWWkRrgLbK+aSIr+ZE8+h4GaDZd4WsDnDB+OzYAwoHKn/F7UzUyz9bUUPvtJniDRQx941MEbkMylR/djNm7noA/Mq+++qTFt7fbh2pKtr0w4W19jaawK6shFyyBfu4+Sh9/CHni6xusfu3HgJ4eqHs/BX2Q3EKhjzIicgteaAoedsrRrWVM4HytduaoUM8SU6PkqlPMs5a8pZNq9CkpNj1DevjgNOLZBOHLT0ffFz8Pf+nilv4f+uS3iASBqR8cFTvddtkkp1k6aRGYZYTCiHsGVNrJseHFSO66BmLpKRRkGlV574z3Qh53EYFNaeX+TXTzewkI8rcxBSxFZhrbIrB2mUv6MASLbk4TKbuFZhkU8dp9fmTDpxgS2CZDcjlFeMP98F+5Ev6pr6Rs6pIj+j5x/XdQoXw/3LAGzX9ZzS0Od3i2maEy740SL9ZrSuXYl8m0nMbFXb5qkVg69jskt18K703fIY24qNHxvqXwzvqw3YnKpB0nTHEZMaWsSc3IIxuskqb0WjtVI9J0u76M0fgaZjnl/cgWIHv78XxLP6a/fgfGP3YDMitXmRJgKyXFUd63CdCa6nksXzhwfsJAslzx7dJj4VtQ+Ubl4hOgx7dD3XEp5Ks+CbHiKEtsghyZXu5/77uP1UWVypj87A2Y/vL3EK5cBp3NkLBP4KYGWjDkcRKJzrY1KO0vrbxbkqZkcoiQTDzjggoHmDCk4ETmR+yVC9abSKsfuIbah6B3P2iZ2KZXsnc3SrfcjMOXvQWlb/wrgjWLicGkRERi5uTrli0abz2SasqXE21laN4XD8mguF8E1WElsgY8+NKylf2ob1lqGJBdYh3f/vuBgw9C964DBo4DujgDGiaWdvM6bZhckZedmLRUtsjU1uCrnclru3AhJl9OmZCuktsozVA2dQhq1y7Em59FtOnXiHbuowA4hPCENeRZSL/W3HpQVgKq6QfcQ3VeVWF6UH67rYCOT/dDHDrhE8vXPPkVRL6JloIjJnfUS83ecz5OWLDy6ywI1YPA6A/sqmGrtYD6jLtb4s0P2psgpE0eboQ910NpqyPFPociOj9JHFM+HpFJR2arpmrUKlAl+i6hQSrOR7B2NRLqI2dTpi+eGwieqknmzNNTsKvxasDF8rNtBbQ0Thnz5MhXly/bdrUcqK7XpYIV5p6s+1ADrnD7rixmJ48W0D8L6mmeie7aBSG+QeWWzHDxl4FM3I1HvJ+YdFK7x0U0JQaS8nedJSshgopucjM1D5q8iipxJdE3AyHcn4YwUkzY2qhxn/ReK/vwLE8IhjQolXXi2uq8YLS99dBMjOmpIh5++OyLTr3okR1eLzMnZ3VdMzuFbNmma+PTp460K0hYcLUD2Jmi0g5MBySDyrKKi9HMUt7W+Jko+p6fb6qSdKvw2if7tzbSZ+SNNErjT/Pz3ynILiAFMwkOz+t+ZOvIwo+LiTbLpt+OrzejOrO5sHNwZPJPVr/6mZ+KyMvoKLTMlCmowqRVwtLB3RXqz1o2V3nsM0fKFc9Vk1m6P8vAckq6tFNyUsFFmcTObPJ1DdXcUynKSi3O7Y0Ki9M5JVeaS+eYuA7BrmTGQ7B49uE9axafs7c8H4Wo1OaVI17V5CsJL1GfzT5c3jFyoj+obgq641NteYeXVjOQKVPds5VSPI/4afwdkhRMnZq/+zsXhqXCUc0sRrArnoRJq6RxGXZAaKBYwrK74HoAZ1ERrD+WumH2PHKcIPADfP3yq+Fx8VVclgwmIoRhrb2A1nUhdS7IRqjO+s+OTXaf1ru08peFgej9IuetYSmFJHBgpg9qyecB0/nT1OyZZUwtTisZYPNXFzyTv2shHNtRv64wfpe3sfG32jzeKGzjWBTQANUaM7LCGAL1rUvcV+rOfC7O4l4d24EQ8kWo2M/Fg6dCFI12dTLzJVTxpdm4cGG+Ozk3169PortZKjw5QFKqQJiENqWqF0Qb/hNNPlRb0wYXPRhYDh5mK5z7iB07I3eqsIvDeJvwOawKrLigFDVRkawmgT8V18KDSSa7dVb0PRZ7mXuKfeWnTA8mYcBE8AIJ1vkr4X/YV+cvi3UA7QDaAbTz6gDaAbQDaOfVAbQDaAfQzqsDaAfQDqB/1K//EmAA3p6EeZ0rb9IAAAAASUVORK5CYII="
                  alt="Instagram"
                />
              </a>
              <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsYouTube" target="_blank">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NBQjFCNkVBOTlCMTFFOTlGNjNCQ0NBQUJGMDUzQkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NBQjFCNkRBOTlCMTFFOTlGNjNCQ0NBQUJGMDUzQkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkM3OTVFRjY3NEM0MTFFODgxNEZCRkI2NDU0ODg1NEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkM3OTVFRjc3NEM0MTFFODgxNEZCRkI2NDU0ODg1NEYiLz4gPC9yZGY6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"
                  alt="YouTube"
                />
              </a>
            </div>
          </div>
          <div class="flex-grow">
            <div class="grid grid-rows-5 grid-flow-col grid-cols-3 w-full h-full items-center">
              <div class="row-start-1 row-span-3 col-span-2 w-full h-full items-center">
                <img
                  :src="getImgFile('home_mobile.png')"
                  class="mobile-phone object-center object-cover w-full -ml-6"
                  style="min-height: 75%"
                />
              </div>
              <div
                class="row-start-1 row-span-3 col-span-1 flex flex-col grid grid-rows-10 justify-center w-full h-full -ml-8"
              >
                <div class="row-span-1"></div>
                <div class="row-span-3">
                  <div class="h-20">
                    <img
                      :src="getImgFile('home_logo01.png')"
                      class="object-left object-scale-down inset-0 w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 class="text-[1rem] mt-[0.3rem] text-[#fff] glow ml-2">
                      Bring Las Vegas Home,
                      <br />
                      Enjoy Real Casino Slots!
                    </h2>
                    <p class="small-summary text-xs text-white ml-2 mt-1">
                      Spin the reels &amp; play real Vegas casino slots like "Ghost Island", "Fishing Bob", "Super
                      Sally’s Shrimpmania"; all packed with unique features, HUGE PAYOUTS &amp; fun gameplay!
                    </p>
                    <div>
                      <a>
                        <img
                          :src="getImgFile('home_btn_play.png')"
                          alt="Play For Free"
                          class="max-w-full h-full object-contain cursor-pointer"
                        />
                      </a>
                    </div>
                    <div>
                      <a>
                        <img
                          :src="getImgFile('home_qrcode.png')"
                          alt="Play For Free"
                          class="max-w-full h-full object-contain"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-start-4 row-span-1 col-start-1 col-span-3 w-full h-full">
                <div class="flex justify-center w-full h-full -mt-12">
                  <img
                    :src="getImgFile('home_title.png')"
                    alt="Make Those Reels Spin"
                    class="object-center object-contain inset-0 w-[80%] h-full"
                  />
                </div>
              </div>
              <div class="row-start-5 row-span-1 col-start-1 col-span-3 w-full h-full -mt-36">
                <div class="flex w-full h-full">
                  <div class="flex-1">
                    <img :src="getImgFile('home_btn_app__store.png')" class="cursor-pointer" alt="iOS App Store" />
                  </div>
                  <div class="flex-1">
                    <img :src="getImgFile('home_btn_google_play.png')" class="cursor-pointer" alt="iOS App Store" />
                  </div>
                  <div class="flex-1">
                    <img
                      :src="getImgFile('home_btn_find_us_on.png')"
                      class="cursor-pointer"
                      alt="Find Us on Facebook"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden sm:block h-full flex flex-col">
          <div class="h-full">
            <div class="grid grid-rows-4 grid-flow-col grid-cols-3 w-full h-full items-center">
              <div class="row-start-1 row-span-3 h-full w-full col-span-3 flex">
                <div class="flex-1 w-full h-full flex justify-end items-center">
                  <img
                    :src="getImgFile('home_mobile.png')"
                    class="desktop-phone h-[100%] max-w-[100%] max-h-[100%] object-right object-contain lg:object-cover -ml-6"
                  />
                </div>
                <div class="flex-1 w-full h-full grid grid-rows-5 grid-cols-1 justify-center">
                  <div
                    class="row-start-1 row-span-1 place-self-end h-full w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mr-6 desktop-bar"
                  >
                    <div class="flex items-center">
                      <a href="#">
                        <img class="cursor-default" :src="getImgFile('home_followus.png')" alt="" />
                      </a>
                      <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsTwitter" target="_blank">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUMyMzgzNTBBOTlBMTFFOTlBMDFEMjE1MTVDMURCMTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUMyMzgzNEZBOTlBMTFFOTlBMDFEMjE1MTVDMURCMTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkYwMDU4ODc3NEM0MTFFOEI5MkZEQTFBQUQ3QTRCMTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkYwMDU4ODg3NEM0MTFFOEI5MkZEQTFBQUQ3QTRCMTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7t3JGjAAAI5UlEQVR42uyceWwU1x3Hv3Ps7QMIAceAwRxxkBxKjXKQhIICOA0t5BANSdqmVdVD/SPpoYomqpIqUitVrZqWqqqUqpWaVoXSkFRp0poEU0gaQnAJWKBAKFCMTUgCDob1rne9u7PT75uZBbf4wLtzrJ35ST+MPbs7bz7vd73fm1lJ13X4Yp/IPgIfqA/UB+qLD9QH6gP1xQfqA/WB+uID9YH6QD/Kohb7RmlLfKSXXEe9lXojtYFaQ62kBqmK9Zo8VbcmVrdUsrQw4dqA1ww8dqUi3p+lJqhnqMepe6i7qO3DvVFfW+Ue0GFkOfVR6ooyNKC51Fuon7d+30f9MXVzObp8lPoMtXUYmAUrLBdpov6Juo1aX05Ap1ju89BIkaIIl3VDhAEcpC4qB6AibOylzhvj+SRGbaPO8hroc9QZ46jqafUSqHCVNeOs8plDXe8V0KfGaTn5hBdARVa8viwuX7cqWk23q4YQ8fRut4He4ylEUSv0k94FkkxQs7oJNZU3/9abN3+XhpkEbVj6a11dKVFuGtlq+I9ic5UkWyAJ8eopKu6+VsXNk1U0VMoIcf31AY+1n9Pw2lkNr3RmTdBVsgm2wC+lGzArJijoE/MwONhGt4HOGdZ68taiL8fBRiTzdztgCsvjJD1+UwTr54dQEbh8wj5Vo+J7/PnqmRwea+/H7s4MF7x8XUY3xlZ7lYrvLwjhAsf36O4UlySDTvokt4FOHvIIB14VlbFlWQwP70/hSBctZZJSGlQBM55HJCyjdWUMt1yljPiWpbTgN5pVfO1fMlpOZLGiIYCVUxSsmxWETIaNLQkOSR8qLlS6DTQy5JGkjnvnqcbgt38ihoUv9aKbboiJSnFJQ7LclJb5+p0VaKoeXeh/+oYI8osikAe87cG2FN4+SssVEyNjsMlWip13eztVVl/ojqnm4Wl09/1rKjGLcQ7d2iVAo5VkHj9ZHBk1zIsXar2th95z584+bNrVh4a5QTxwbQhhbdAOg+42UGVIoEGgJnzpo6eHJBwg1OZ5PPChZiYVeXQw58wI4DtzgyWF4BRPvZHhh7kI29dV451VFQgxcWZEZWBT7nSmwSxJCP8fbiZhvHx7DE/eGjWTlQgB+hVaKyfg6yXCFBLgGL5cH8SmJVHcXqvi4X1p/K49jXzUPgz2A5XM+q43O7jHPNEYwv7VlbitLmgkGaNm1EeoF2nhC6tLH6rKc4Ssj/kKY+gv96bMZGlzVWc/UCb1jr6hU/rCCTL+2RzD5hUx3DZdNVzasNj+QSZB1IgMHzMi9gz1BM/VvCOJ39AyjSRpMwGHXB7YdCo34svumxkg2Aq0UB9qDGOycD1RZ57XzJ9p3SzMLXe1Q350JINtB/tNy5Rhe7tbdQRohYwdxzI48LEwFlSNTOKTjGdCk1wEtL6fw1s9ebTRYg/GNZwWy0pW4O8QcH2sdKpB8RGFQt6BvQPVEZeXzeL+vtf7jEx6xR0JBrm7pgeolreTZSdDRydhzq62yUR1M2k6Jfa7PCFECKaGsfEIC+f5f0ugO1OcKSgcXT2tfek1qm0xtFfTHd2EsR8oB6wz7m1bEsPWdVUQOWcDwaa0smj04UzaWaD2uzyXh2lm0gTj4R01KrUCcf5fLZOtuUMiJqtjyUIls8O08+ylLF9FmoEyuEdFlEwnRd0bHEsx1EilEn51PItyk9YzmtmMVsYaUJY3Xaey+PnxTFkBfa2bXuPwg27OANXNWvRbb6Sw53y+LGCKIf2dNS7C8hgEKiQsGRl/WUsCr57NeQ50c1cW5z7ImeMak0CFYXKVlM7lseyFBL64J4VjCe+s9Rf/yZoFvcPVhrP2L/jRxWqnKnjmRAYPcOW04d8Zo4xyU/b2aNjdkTF7iA6fWnX8alim3D8/gp82hvB+SueKVEdEcbco/eaBfrPJUgHHgTpfHUYl/PpQv7HhWBORUBeVEXCR51+ZiHYdo3VWK67cSOk80JCERFzD0u1JTzL753b1mX7o0sJCduWqJih4kzH0s2IP3EVZ+2YKvWIPy4XY6R7QwnKUUDe+ncbilxPY1+N8p0Rk9ecPpI3zwsXiQnXN9wTUibTUUzks+jCBB+uDWDNDRUNERjVrQzuaxwV5ifXmN3YmjcWFsTfrYlHhbstCXNhE2VhLb2xP4/4/x7GcF96Zsu+KtxLm6q0JIGAtLly+o1919WzC9cTmXb8OZYKMLzWFsf76EObatI37+5NZfGFH0jQTYfEerCPsBWq07qiZwn2E+qWbxkSnnO49mzHtrmkBPHJdELNsdPPHGS9/0JYy1+pRyROYpQK9PLNwBTSV1rZ4ZginaYlxFtOVdO9pdL1FBLl8qorFV9u7Dy6Ws1/lsnaH6GyJDcGAdzDtByr+yOtqooX8timKSQ42cs9zsjYczuDJQ2noSd3cFpZsTUBFDV4q9ouwpC3xDv6YebnL68bdd3WTFTwyL4jP1AVQZ6Nrn0zm8ccTWfzsaD+6z2pmJg85knzO62urJroJVDzW9/Eh51ZkbnETFovq1bUBY39pVa1q7GKOVjro1i3v5dDKDP7C6Rw0caes2AWNOJrF3yXQ6W66fMeQQHWrZIkoRlPiRa6lXzxqdntupGvOZ6wTCWk24V7D11WqElTySZOT6ES9x8nooCV2MQ4fjps3PRh3kli9AcO9nX/IscftGCqenrtnxLpTbHdWSReTVtu7WbSdtA6KrpPIUYo04DZy3YzO4v58yTouXHrgjQ7u1JZH3Ab6F+oPR3c2Cf+zn6wP0ALgQiLzftv5ObdXSodhPnteWh4VIyhYabFPxNsvopp+1oul52MYn/KUBdV1oGIWd48zmCIZfdfL5sinqclxBLTZ627TOeoNohAeBzBXWdWLp0ALCWoBSnzW3EMR3+ZwM7Wl1A+ysx/aRV0J82syDo8RkKep37aMYY/XzZGh5A+WLrEAi3AwjVoN8+k7BUU+pVZEUXbxwW9qmnoB5lcNvUXdTv0H1dYbsCT/W8LtFf+bxXygPlAfqC8+UB+oD9QXH6gP1Afqiw/UB+oD/UjLfwUYACrJ4DM9dyLSAAAAAElFTkSuQmCC"
                          alt="Twitter"
                        />
                      </a>
                      <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsFacebook" target="_blank">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQwQkQyNDRBOTk5MTFFOUI1NkNFQTQ4Mzk3MUEyMjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQwQkQyNDNBOTk5MTFFOUI1NkNFQTQ4Mzk3MUEyMjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM3QTVGMDM3NEM0MTFFODk4OTA4NDNBNkRGNUZGN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM3QTVGMDQ3NEM0MTFFODk4OTA4NDNBNkRGNUZGN0YiLz4gPC9yZGY6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"
                          alt="Facebook"
                        />
                      </a>
                      <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsInstagram" target="_blank">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEIzMEMxRTdBOTlBMTFFOTg2MzlDNTZCRjYxOTRFOEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEIzMEMxRTZBOTlBMTFFOTg2MzlDNTZCRjYxOTRFOEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0FCQkZGN0U3NEM1MTFFODg2RUJFRTYwN0Q4RUM3NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0FCQkZGN0Y3NEM1MTFFODg2RUJFRTYwN0Q4RUM3NzYiLz4gPC9yZGY6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"
                          alt="Instagram"
                        />
                      </a>
                      <a href="http://link.showmevegasslots.com/ShowMeVegasSlotsYouTube" target="_blank">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNWQ5NmE1OS1hNGI1LThlNGYtYjE3Zi1mMGNhM2ZkMjhmZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0NBQjFCNkVBOTlCMTFFOTlGNjNCQ0NBQUJGMDUzQkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0NBQjFCNkRBOTlCMTFFOTlGNjNCQ0NBQUJGMDUzQkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkM3OTVFRjY3NEM0MTFFODgxNEZCRkI2NDU0ODg1NEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkM3OTVFRjc3NEM0MTFFODgxNEZCRkI2NDU0ODg1NEYiLz4gPC9yZGY6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"
                          alt="YouTube"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="row-start-2 row-span-4 h-full flex flex-col">
                    <div class="ml-2">
                      <div>
                        <img :src="getImgFile('home_logo01.png')" class="object-left object-scale-down max-h-24" />
                      </div>
                      <h2 class="text-[1.3rem] text-[#fff] glow ml-2 mt-2">
                        Bring Las Vegas Home,
                        <br />
                        Enjoy Real Casino Slots!
                      </h2>
                      <p class="summary w-5/6 md:max-w-sm text-sm md:text-lg text-white ml-2 mt-2">
                        Spin the reels &amp; play real Vegas casino slots like "Ghost Island", "Fishing Bob", "Super
                        Sally’s Shrimpmania"; all packed with unique features, HUGE PAYOUTS &amp; fun gameplay!
                      </p>
                    </div>
                    <div class="flex-1 flex flex-col min-h-0">
                      <div class="w-full min-h-0 max-h-44">
                        <a>
                          <img
                            :src="getImgFile('home_btn_play.png')"
                            alt="Play For Free"
                            class="max-w-full h-full object-contain cursor-pointer"
                          />
                        </a>
                      </div>
                      <div class="w-full min-h-0 max-h-60">
                        <a>
                          <img
                            :src="getImgFile('home_qrcode.png')"
                            alt="Play For Free"
                            class="max-w-full h-full object-contain"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-start-4 row-span-1 col-start-1 col-span-3 flex flex-col w-full items-center h-full">
                <div class="flex-1 justify-center min-h-0">
                  <img
                    :src="getImgFile('home_title.png')"
                    alt="Make Those Reels Spin"
                    class="object-center object-contain inset-0 w-full h-full"
                  />
                </div>
                <div class="flex-1 justify-center">
                  <div class="flex max-w-xl min-h-0">
                    <div class="flex-1">
                      <img :src="getImgFile('home_btn_app__store.png')" class="cursor-pointer" alt="iOS App Store" />
                    </div>
                    <div class="flex-1">
                      <img :src="getImgFile('home_btn_google_play.png')" class="cursor-pointer" alt="iOS App Store" />
                    </div>
                    <div class="flex-1">
                      <img
                        :src="getImgFile('home_btn_find_us_on.png')"
                        class="cursor-pointer"
                        alt="Find Us on Facebook"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full items-center justify-around hidden md:block md:grid md:grid-cols-5 px-2 bg-black bg-opacity-75 gap-2"
        style="height: 10%"
      >
        <div class="md:col-span-1"></div>
        <div class="md:col-span-3 items-center">
          <p class="text-gray-400 leading-none text-sm text-center">
            ©2019 Show Me Vegas Slots. All Rights Reserved. &nbsp;Some features may require in-app purchase. &nbsp;App
            Store is a service mark of Apple Inc. &nbsp;Android is a trademark of Google Inc. &nbsp;Google Play is a
            trademark of Google Inc. Facebook© and its logo are trademarks of Facebook, Inc.
          </p>
          <div class="text-gray-400 flex items-center justify-around gap-2">
            <span class="text-sm underline text-blue-500 cursor-pointer" @click="showPolicy = true">
              Privacy Policy
            </span>
            <span class="text-sm underline text-blue-500 cursor-pointer" @click="showTerms = true">
              Terms &amp; Service
            </span>
            <span class="text-sm underline text-blue-500 cursor-pointer" @click="showGames = true">
              Responsible Gaming
            </span>
            <span class="text-sm underline text-blue-500 cursor-pointer">
              <a href="mailto:support@showmevegasslots.com?Subject=Support%20via%20Contact%20Us%20" target="_top">
                Contact Us
              </a>
            </span>
          </div>
        </div>
        <div class="md:col-span-1"></div>
      </div>

      <div
        class="w-full flex-row flex items-center justify-around px-2 bg-black bg-opacity-75 gap-2 md:hidden"
        style="min-height: 10%"
      >
        <div class="items-center">
          <p class="text-gray-400 leading-none text-xs text-center">
            ©2019 Show Me Vegas Slots. All Rights Reserved. &nbsp;Some features may require in-app purchase. &nbsp;App
            Store is a service mark of Apple Inc. &nbsp;Android is a trademark of Google Inc. &nbsp;Google Play is a
            trademark of Google Inc. Facebook© and its logo are trademarks of Facebook, Inc.
          </p>
          <div class="text-gray-400 flex items-center justify-around gap-2">
            <span class="text-sm underline text-blue-500 cursor-pointer" @click="showPolicy = true">
              Privacy Policy
            </span>
            <span class="text-sm underline text-blue-500 cursor-pointer" @click="showTerms = true">
              Terms &amp; Service
            </span>
            <span class="text-sm underline text-blue-500 cursor-pointer" @click="showGames = true">
              Responsible Gaming
            </span>
            <span class="text-sm underline text-blue-500 cursor-pointer">
              <a href="mailto:support@showmevegasslots.com?Subject=Support%20via%20Contact%20Us%20" target="_top">
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopUpPolicy v-if="showPolicy" v-model:visible="showPolicy" />
  <PopUpTerms v-if="showTerms" v-model:visible="showTerms" />
  <PopUpGames v-if="showGames" v-model:visible="showGames" />
</template>

<script setup lang="ts">
import { getImgFile } from '@/utils/common'

import { PopUpPolicy, PopUpTerms, PopUpGames } from './components'
import { ref } from 'vue'

const showPolicy = ref(false)
const showTerms = ref(false)
const showGames = ref(false)
</script>

<style scoped lang="scss">
.home-wrapper {
  .desktop-phone {
    animation-name: upDown;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .mobile-phone {
    animation-name: mobileUpDown;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .desktop-bar {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4AAAACiCAYAAAAQuKP3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEUxNEUzMjhBOTk5MTFFOTg0NTRGMjQ0NTU0NURBRkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEUxNEUzMjdBOTk5MTFFOTg0NTRGMjQ0NTU0NURBRkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzEyREE2ODQ3MDI3MTFFOEI1QzNBNTgxQTM2OTlENzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzEyREE2ODU3MDI3MTFFOEI1QzNBNTgxQTM2OTlENzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GbjoeAAAYKklEQVR42uzd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);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    display: flex;
    align-items: center;
  }
  .glow {
    text-shadow:
      0 0 3px #ff4da6,
      0 0 4px #ff4da6;
  }
  .summary {
    font-family: open-sans, sans-serif;
    color: #fff;
    line-height: 1.3;
  }
  .mobile-portrait-icon-bar {
    width: 90%;
  }
}

@keyframes upDown {
  0% {
    transform: translate(0);
  }
  65% {
    transform: translateY(25px);
  }
  100% {
    transform: translate(0);
  }
}
@keyframes mobileUpDown {
  0% {
    transform: translate(0);
  }
  65% {
    transform: translateY(10px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
