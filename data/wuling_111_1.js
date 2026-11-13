const wulingData = [
    {
        "id": "wuling_111_1_q1",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "multiple_choice",
        "question": "設 $p>q$ 為實數，下列敘述何者正確？\n(1) 若 $p<q$，$p\\backslash q$ 為有理數，則至少有一有理數 $r$ 使得 $p<r<q$\n(2) 若 $p<q$，$p\\backslash q$ 為無理數，則至少有一有理數 $r$ 使得 $p<r<q$\n(3) 若 $p$ 為無理數，$p>0$，則 $p^{\\frac{1}{2}}$ 為無理數\n(4) 若 $p^{2}$ 為無理數，則 $p^{3}$ 為無理數\n(5) 若 $p$ 為無理數、$q$ 為有理數，則 $\\frac{7p+q}{8}$ 為無理數",
        "options": [
            "(1)",
            "(2)",
            "(3)",
            "(4)",
            "(5)"
        ],
        "answer": "1,2,3,5",
        "solution": "(1)(2) 根據實數的稠密性得知正確。\n(3) 正確。\n(4) 取 $p=\\sqrt[3]{2}$，$p^{2}=\\sqrt[3]{2^{2}}$ 為無理數，但 $p^{3}=((2)^{\\frac{1}{3}})^{3}=2$ 為有理數（矛盾），故 (4) 錯誤。\n(5) 設 $\\frac{7p+q}{8} = r$ 為有理數，則 $7p = 8r - q$ 為有理數，推得 $p = \\frac{8r - q}{7}$ 為有理數，與 $p$ 為無理數矛盾，故 $\\frac{7p+q}{8}$ 必為無理數，正確。"
    },
    {
        "id": "wuling_111_1_q2",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "multiple_choice",
        "question": "關於 2 的次方的運算，下列敘述何者正確？\n(1) $2^{2}+2^{1}=2^{3}$\n(2) $2^{\\frac{1}{2}}-2^{\\frac{1}{2}}=2^{0}$\n(3) $2^{\\frac{1}{2}}=2^{-1}$\n(4) $(2^{x})^{2}=(4^{x})$\n(5) $2^{\\sqrt{2}}+2^{\\sqrt{2}}=2^{\\sqrt{2}+1}$",
        "options": [
            "(1)",
            "(2)",
            "(3)",
            "(4)",
            "(5)"
        ],
        "answer": "4,5",
        "solution": "(1) $2^{2}+2^{1} = 4+2 = 6 \\neq 2^{3}$（錯誤）\n(2) $2^{\\frac{1}{2}}-2^{\\frac{1}{2}} = 0 \\neq 2^{0}$（錯誤）\n(3) $2^{\\frac{1}{2}} = \\sqrt{2} \\neq \\frac{1}{2} = 2^{-1}$（錯誤）\n(4) $(2^{x})^{2} = 2^{2x} = (2^{2})^{x} = 4^{x}$（正確）\n(5) $2^{\\sqrt{2}}+2^{\\sqrt{2}} = 2 \\times 2^{\\sqrt{2}} = 2^{\\sqrt{2}+1}$（正確）"
    },
    {
        "id": "wuling_111_1_q3",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "multiple_choice",
        "question": "下列敘述何者正確？\n(1) $\\sqrt{15}-\\sqrt{14}>\\sqrt{30}-\\sqrt{29}$\n(2) $\\sqrt{30}-\\sqrt{28}>\\sqrt{15}-\\sqrt{14}$\n(3) $\\sqrt{1}+\\sqrt{2}-\\sqrt{3}>\\sqrt{2}+\\sqrt{3}-\\sqrt{4}$\n(4) $3+\\sqrt{18}>4+\\sqrt{11}$\n(5) $\\sqrt{20}+\\sqrt{27}>\\sqrt{18}+\\sqrt{30}$",
        "options": [
            "(1)",
            "(2)",
            "(3)",
            "(4)",
            "(5)"
        ],
        "answer": "1,2",
        "solution": "(1) 利用有理化改寫（各項平方差差一）：\n$\\sqrt{15}-\\sqrt{14} = \\frac{1}{\\sqrt{15}+\\sqrt{14}}$，$\\sqrt{30}-\\sqrt{29} = \\frac{1}{\\sqrt{30}+\\sqrt{29}}$。\n因 $\\sqrt{15}+\\sqrt{14} < \\sqrt{30}+\\sqrt{29}$，故倒數大，即 $\\sqrt{15}-\\sqrt{14} > \\sqrt{30}-\\sqrt{29}$（正確）。\n\n(2) $\\sqrt{30}-\\sqrt{28} = \\frac{2}{\\sqrt{30}+\\sqrt{28}} = \\frac{1}{\\frac{\\sqrt{30}+\\sqrt{28}}{2}} = \\frac{1}{\\sqrt{7.5}+\\sqrt{7}}$。\n因 $\\sqrt{7.5}+\\sqrt{7} < \\sqrt{15}+\\sqrt{14}$，故 $\\sqrt{30}-\\sqrt{28} > \\sqrt{15}-\\sqrt{14}$（正確）。\n\n(4) 各項平方和比較：\n$(3+\\sqrt{18})^{2} = 27+6\\sqrt{18}$，$(4+\\sqrt{11})^{2} = 27+8\\sqrt{11}$。\n比較 $6\\sqrt{18} = \\sqrt{648}$ 與 $8\\sqrt{11} = \\sqrt{704}$，因 $\\sqrt{648} < \\sqrt{704}$，故 $3+\\sqrt{18} < 4+\\sqrt{11}$（錯誤）。\n\n(5) 各項乘積比較：\n$(\\sqrt{20}+\\sqrt{27})^{2} = 47+\\sqrt{2160}$，$(\\sqrt{18}+\\sqrt{30})^{2} = 48+\\sqrt{2160}$。\n因 $47 < 48$，故 $\\sqrt{20}+\\sqrt{27} < \\sqrt{18}+\\sqrt{30}$（錯誤）。"
    },
    {
        "id": "wuling_111_1_q4",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "multiple_choice",
        "question": "下列敘述何者正確？\n(1) $\\log\\frac{1}{\\sqrt{10}}=\\frac{-1}{2}$\n(2) $\\log 123>2$\n(3) $0<\\log a<3$，則 $1<a\\le 999$\n(4) $10^{\\log\\frac{1}{10}}=-1$\n(5) $100^{\\log 3}=10^{2\\log 3}=(10^{\\log 3})^{2}=9$",
        "options": [
            "(1)",
            "(2)",
            "(3)",
            "(4)",
            "(5)"
        ],
        "answer": "1,2,5",
        "solution": "(1) $\\log(10^{-1/2}) = -\\frac{1}{2}$（正確）。\n(2) $\\log 123 > \\log 100 = 2$（正確）。\n(3) $0 < \\log a < 3 \\Rightarrow 10^{0} < a < 10^{3} \\Rightarrow 1 < a < 1000$（錯誤，小於 1000 而非小於等於 999）。\n(4) $10^{\\log\\frac{1}{10}} = \\frac{1}{10} \\neq -1$（錯誤）。\n(5) $100^{\\log 3} = (10^2)^{\\log 3} = 10^{2\\log 3} = (10^{\\log 3})^2 = 3^2 = 9$（正確）。"
    },
    {
        "id": "wuling_111_1_q5",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "已知 $x+\\frac{2}{x}=\\sqrt{10}$，求 $\\frac{x^{3}}{8}+\\frac{1}{x^{3}}$ 之值。",
        "answer": "\\frac{\\sqrt{10}}{2}",
        "solution": "由 $x+\\frac{2}{x}=\\sqrt{10}$ 同除以 2 可得：\n$\\frac{x}{2}+\\frac{1}{x}=\\frac{\\sqrt{10}}{2}$。\n兩邊平方：\n$(\\frac{x}{2})^{2}+(\\frac{1}{x})^{2} = (\\frac{x}{2}+\\frac{1}{x})^{2}-2(\\frac{x}{2})(\\frac{1}{x}) = \\frac{10}{4}-1 = \\frac{6}{4}=\\frac{3}{2}$。\n利用立方和公式：\n$\\frac{x^{3}}{8}+\\frac{1}{x^{3}} = (\\frac{x}{2}+\\frac{1}{x})\\left((\\frac{x}{2})^{2}-\\frac{1}{2}+(\\frac{1}{x})^{2}\\right) = \\frac{\\sqrt{10}}{2} \\times (\\frac{3}{2}-\\frac{1}{2}) = \\frac{\\sqrt{10}}{2}$。"
    },
    {
        "id": "wuling_111_1_q6",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "$x$ 為整數且滿足 $|x-2-\\sqrt{3}|+|x-5|=3-\\sqrt{3}$，求 $x$ 的值為。",
        "answer": "4, 5",
        "solution": "此題須從 3 個範圍進行討論：\n1. 若 $x \\le 2+\\sqrt{3}$：\n$(2+\\sqrt{3}-x)+(5-x) = 3-\\sqrt{3} \\Rightarrow 2x = 4+2\\sqrt{3} \\Rightarrow x = 2+\\sqrt{3}$（代入檢驗不合或邊界不合）。\n2. 若 $2+\\sqrt{3} < x \\le 5$：\n$(x-2-\\sqrt{3})+(5-x) = 3-\\sqrt{3} \\Rightarrow 3-\\sqrt{3} = 3-\\sqrt{3}$（恆成立），故解為 $(2+\\sqrt{3}, 5]$。\n3. 若 $x > 5$：\n$(x-2-\\sqrt{3})+(x-5) = 3-\\sqrt{3} \\Rightarrow 2x-7-\\sqrt{3} = 3-\\sqrt{3} \\Rightarrow 2x = 10 \\Rightarrow x = 5$（與 $x>5$ 矛盾，不合）。\n綜合以上， $x$ 的解範圍為 $(2+\\sqrt{3}, 5]$。\n題目要求整數，故 $x$ 可取 4 或 5。"
    },
    {
        "id": "wuling_111_1_q7",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "實數數線上，$A(\\sqrt{46-6\\sqrt{5}})、B(\\sqrt{14-6\\sqrt{5}})$，若 $P$ 點在數線上，且 $AP:BP=3:1$，求 $P$ 點座標為。",
        "answer": "2 或 5-\\sqrt{5}",
        "solution": "先化簡雙重根號：\n$\\sqrt{46-6\\sqrt{5}} = \\sqrt{46-2\\sqrt{45}} = \\sqrt{45}-1 = 3\\sqrt{5}-1$。\n$\\sqrt{14-6\\sqrt{5}} = \\sqrt{14-2\\sqrt{45}} = \\sqrt{9}-\\sqrt{5} = 3-\\sqrt{5}$。\n\n分 2 種情況討論 $P$ 點位置：\n1. 若 $P$ 為內分點 ($AP:BP = 3:1$)：\n座標 $x = \\frac{1 \\times (3\\sqrt{5}-1) + 3 \\times (3-\\sqrt{5})}{1+3} = \\frac{3\\sqrt{5}-1+9-3\\sqrt{5}}{4} = \\frac{8}{4} = 2$。\n\n2. 若 $P$ 為外分點 ($AP:BP = 3:1$)：\n座標 $x = \\frac{3 \\times (3-\\sqrt{5}) - 1 \\times (3\\sqrt{5}-1)}{3-1} = \\frac{9-3\\sqrt{5}-3\\sqrt{5}+1}{2} = \\frac{10-6\\sqrt{5}}{2} = 5-3\\sqrt{5}$。"
    },
    {
        "id": "wuling_111_1_q8",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "設 $x=\\frac{\\sqrt{2}+1}{\\sqrt{2}-1}$，求 $x^{4}-\\frac{1}{x^{4}}$ 之值為。",
        "answer": "816\\sqrt{2}",
        "solution": "先將 $x$ 有理化：\n$x = \\frac{(\\sqrt{2}+1)^{2}}{2-1} = 3+2\\sqrt{2}$。\n則 $\\frac{1}{x} = \\frac{1}{3+2\\sqrt{2}} = 3-2\\sqrt{2}$。\n因此：\n$x+\\frac{1}{x} = (3+2\\sqrt{2})+(3-2\\sqrt{2}) = 6$。\n$x-\\frac{1}{x} = \\sqrt{(x+\\frac{1}{x})^{2}-4} = \\sqrt{36-4} = \\sqrt{32} = 4\\sqrt{2}$。\n$x^{2}+\\frac{1}{x^{2}} = (x+\\frac{1}{x})^{2}-2 = 36-2 = 34$。\n故所求：\n$x^{4}-\\frac{1}{x^{4}} = (x^{2}+\\frac{1}{x^{2}})(x+\\frac{1}{x})(x-\\frac{1}{x}) = 34 \\times 6 \\times 4\\sqrt{2} = 816\\sqrt{2}$。"
    },
    {
        "id": "wuling_111_1_q9",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "解不等式 $|2x-1|>x-6$，求 $x$ 的範圍並以區間表示。",
        "answer": "(-\\infty, \\infty)",
        "solution": "依絕對值定義分段討論：\nCase 1：若 $x \\ge \\frac{1}{2}$，則 $2x-1 > x-6 \\Rightarrow x > -5$。\n與 $x \\ge \\frac{1}{2}$ 取交集得 $x \\ge \\frac{1}{2}$。\n\nCase 2：若 $x < \\frac{1}{2}$，則 $-(2x-1) > x-6 \\Rightarrow -2x+1 > x-6 \\Rightarrow -3x > -7 \\Rightarrow x < \\frac{7}{3}$。\n與 $x < \\frac{1}{2}$ 取交集得 $x < \\frac{1}{2}$。\n\n合併兩種情況可得全實數範圍，以區間表示為 $(-\\infty, \\infty)$。"
    },
    {
        "id": "wuling_111_1_q10",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "已知 $2(\\log x)^{2}+3\\log x+2$ 是正數，求 $2(\\log x)^{2}+3\\log x+2+\\frac{16}{2(\\log x)^{2}+3\\log x+2}+8$ 的最小值為______，此時 $x=$______。",
        "answer": "16; \\frac{1}{100}, \\sqrt{10}",
        "solution": "(1) 令 $A = 2(\\log x)^{2}+3\\log x+2 > 0$，所求為 $A + \\frac{16}{A} + 8$。\n由算幾不等式：\n$A + \\frac{16}{A} \\ge 2\\sqrt{A \\cdot \\frac{16}{A}} = 8$。\n因此 $A + \\frac{16}{A} + 8 \\ge 8 + 8 = 16$。\n故最小值为 16。\n\n(2) 當極值發生時，等號成立，即 $A = \\frac{16}{A} \\Rightarrow A^{2} = 16 \\Rightarrow A = 4$（負不合）。\n代回 $2(\\log x)^{2}+3\\log x+2 = 4 \\Rightarrow 2(\\log x)^{2}+3\\log x-2 = 0$\n$(2\\log x - 1)(\\log x + 2) = 0$\n解得 $\\log x = \\frac{1}{2}$ 或 $\\log x = -2$\n故 $x = \\sqrt{10}$ 或 $x = \\frac{1}{100}$。"
    },
    {
        "id": "wuling_111_1_q11",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "設 $x>2$，化簡 $\\sqrt{\\frac{1}{(x-2)^{2}}+\\frac{1}{(x+2)^{2}}+\\frac{1}{16}}$ 之值為。",
        "answer": "\\frac{x^{2}+12}{4x^{2}-16}",
        "solution": "將根號內通分：\n$\\sqrt{\\frac{16((x+2)^{2}+(x-2)^{2}) + (x-2)^{2}(x+2)^{2}}{16(x-2)^{2}(x+2)^{2}}}$\n分子部分：\n$16(2x^{2}+8) + (x^{2}-4)^{2} = 32x^{2}+128 + x^{4}-8x^{2}+16 = x^{4}+24x^{2}+144 = (x^{2}+12)^{2}$。\n因此原式化為：\n$\\frac{\\sqrt{(x^{2}+12)^{2}}}{|4(x-2)(x+2)|} = \\frac{|x^{2}+12|}{4x^{2}-16}$。\n因 $x>2$，故 $x^{2}+12$ 恆正，原式 = $\\frac{x^{2}+12}{4x^{2}-16}$。"
    },
    {
        "id": "wuling_111_1_q12",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "multiple_choice",
        "question": "1624年，布里格斯於《對數算數》中利用開平方近似計算 $\\log 2$。假設 $10^{\\frac{1}{4}}<2<10^{\\frac{1}{2}}$，並令 $2=10^{\\frac{1}{4}} \\times a$，接著計算出 $a$ 的近似值，再假設 $a=10^{\\frac{1}{32}} \\times b$，依此類推。下列關於 $b$ 的敘述何者正確？\n(1) $b < 10^{\\frac{1}{16}}$\n(2) $b < 10^{\\frac{1}{32}}$\n(3) $b > 1$\n(4) $\\log b > 1$\n(5) $b^{8} < 2$",
        "options": [
            "(1)",
            "(2)",
            "(3)",
            "(4)",
            "(5)"
        ],
        "answer": "1,2,3,5",
        "solution": "(1)(2)(3) 依題目流程可推得 $b$ 滿足相關數值大小，可知 $b > 1$ 且小於 $10^{\\frac{1}{16}}$、$10^{\\frac{1}{32}}$。\n(4) 若 $\\log b > 1 \\Rightarrow b > 10$，但 $b$ 是一個非常接近 1 的數，故錯誤。\n(5) $b = \\frac{a}{10^{\\frac{1}{32}}} = \\frac{2}{10^{\\frac{1}{4}+\\frac{1}{32}}} = \\frac{2}{10^{\\frac{9}{32}}}$，推得 $b^{8} < 2$ 正確。"
    },
    {
        "id": "wuling_111_1_q13",
        "school": "武陵高中",
        "exam": "111學年度上學期高一第一次段考",
        "type": "fill_in_blank",
        "question": "影印店中最常用的最大影印紙是 A3，將長邊對折成兩半後就是 A4，以此類推。若 A3、A4 等型號影印紙長寬比例對半裁切後依然維持相同的長寬比，試回答：\n(1) 長與寬的比值必須要是多少？\n(2) 若 A5 紙的寬度約為 14.85 公分，估計 A3 紙的長度約為多少公分？（四捨五入至 3 位有效數字，$\\sqrt{2} \\approx 1.414$）",
        "answer": "\\sqrt{2}; 42.0",
        "solution": "(1) 設 A4 長寬比為 $a:b$，對半裁切後長寬比維持不變：\n$a:b = b:\\frac{a}{2} \\Rightarrow \\frac{a^{2}}{2} = b^{2} \\Rightarrow \\frac{a}{b} = \\sqrt{2}$（負不合）。\n\n(2) A5 寬度 = 14.85 公分。\nA4 寬度 = A5 長度 = $14.85 \\times \\sqrt{2}$。\nA4 長度 = A3 寬度 = $14.85 \\times (\\sqrt{2})^{2}$。\nA3 長度 = $14.85 \\times (\\sqrt{2})^{3} = 14.85 \\times 2 \\times 1.414 \\approx 41.9958$，四捨五入至 3 位有效數字約為 42.0 公分。"
    }
];