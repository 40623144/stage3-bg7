var tipuesearch = {"pages": [{'title': 'About', 'text': '2021-協同產品設計實習-stage3-bg7 \n 組長:40623144 \n 組員: 40823233 \n \xa0 \xa0 \xa0 \xa0 40723224 \n \xa0 \xa0 \xa0 \xa0 40823241 \n \xa0 \xa0 \xa0 \xa0 40423155 \n \xa0 \xa0 \xa0 \xa0 40823227 \n \xa0 \xa0 \xa0 \xa0 40723233 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Stage1', 'text': '', 'tags': '', 'url': 'Stage1.html'}, {'title': 'Stage2', 'text': '', 'tags': '', 'url': 'Stage2.html'}, {'title': 'Stage3', 'text': '', 'tags': '', 'url': 'Stage3.html'}, {'title': 'task', 'text': '', 'tags': '', 'url': 'task.html'}, {'title': 'task1', 'text': 'def stu2b(account):\n return account\nteamb = []\n   \nwith open("stage3_2b.txt") as fh:     #讀取stage3_2b的檔案\n    data = fh.readlines()\n    data = [a.replace(\'40823231\',\'40823231-2\') for a in data]      #將40823231換成40823231-2\n    data = [a.replace(\'407\',\'s407\') for a in data]     #將有407的學號換成s407\n  \nfor i in range(len(data)):     #數據中會有\\n跟\\t，將\\n跟\\t去除\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n       \noutput = ""    \nseperator = "-"*10 + "</br>"     #分隔號製作\n   \nfor i in teamb[0:]:    #小組 組長 其他六個組員\n    team = i[0]\n    leader = stu2b(i[1])\n    m1 = stu2b(i[3])\n    m2 = stu2b(i[5])\n    m3 = stu2b(i[7])\n    m4 = stu2b(i[9])\n    m5 = stu2b(i[11])\n    m6 = stu2b(i[13])\n  \n           \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"    #組長以及組員的倉儲和網站\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n    \n   \n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"     #小組的倉儲含網站\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n   \n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n       \n            \n    try:\n        m7 = stu2b(i[15])     #第七個組員\n    except:\n        m7 = ""\n    try:\n        m8 = stu2b(i[17])     #第八個組員\n    except:\n        m8 = ""\n          \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"     #如果有第七個組員會再加倉儲和網站沒有的話就空白\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>" \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n       \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"     #如果有第八個組員會再加倉儲和網站最後再加分隔線\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>" \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n   \n   \nprint(output)     #輸出 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '', 'tags': '', 'url': 'task2.html'}, {'title': 'task3', 'text': '', 'tags': '', 'url': 'task3.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'week10', 'text': '', 'tags': '', 'url': 'week10.html'}, {'title': 'week11', 'text': '直播 \n \n', 'tags': '', 'url': 'week11.html'}, {'title': 'week12', 'text': '直播 \n \n', 'tags': '', 'url': 'week12.html'}, {'title': 'week13~14', 'text': 'RoboDk 機械手臂 \n 程式 \n from robolink import *\nfrom robodk import *\n \nimport os\n \ndir_path = os.path.dirname(os.path.realpath(__file__))\nprint(dir_path)\n# Calculate pyramid coordinate\n \n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100 # approach distance to grab each part, in mm\nnTCPs = 6 # number of TCP\'s in the tool\n \ndef pyramid_calc(BALLS_SIDE=4):\n"""Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n#the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n#BALL_DIAMETER = 100\nxyz_list = []\nsqrt2 = 2**(0.5)\nfor h in range(BALLS_SIDE):\nfor i in range(BALLS_SIDE-h):\nfor j in range(BALLS_SIDE-h):\nheight = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\nxyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\nreturn xyz_list\n \ndef TCP_On(toolitem, tcp_id):\n"""Attach the closest object to the toolitem Htool pose,\nfurthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\ntoolitem.AttachClosest()\ntoolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\ntoolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n"""Detaches the closest object attached to the toolitem Htool pose,\nfurthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\ntoolitem.DetachAll(itemleave)\ntoolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\ntoolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n \n# Make a list of positions to place the objects\nballs_list = pyramid_calc(4)\n \n#print(len(frame1_list))\n# 4*4 = 16\n# 3*3 = 9\n# 2*2 = 4\n# 1+4+9+16 = 30\n \n# height 50*sqrt(2)\n\'\'\'\n[\n \n[50.0, 50.0, 50.0], [50.0, 150.0, 50.0], [50.0, 250.0, 50.0], [50.0, 350.0, 50.0],\n \n[150.0, 50.0, 50.0], [150.0, 150.0, 50.0], [150.0, 250.0, 50.0], [150.0, 350.0, 50.0],\n \n[250.0, 50.0, 50.0], [250.0, 150.0, 50.0], [250.0, 250.0, 50.0], [250.0, 350.0, 50.0],\n \n[350.0, 50.0, 50.0], [350.0, 150.0, 50.0], [350.0, 250.0, 50.0], [350.0, 350.0, 50.0],\n \n \n[100.0, 100.0, 120.71067811865474], [100.0, 200.0, 120.71067811865474], [100.0, 300.0, 120.71067811865474],\n \n[200.0, 100.0, 120.71067811865474], [200.0, 200.0, 120.71067811865474], [200.0, 300.0, 120.71067811865474],\n \n[300.0, 100.0, 120.71067811865474], [300.0, 200.0, 120.71067811865474], [300.0, 300.0, 120.71067811865474],\n \n \n[150.0, 150.0, 191.42135623730948], [150.0, 250.0, 191.42135623730948],\n \n[250.0, 150.0, 191.42135623730948], [250.0, 250.0, 191.42135623730948],\n \n \n[200.0, 200.0, 262.13203435596427]\n \n]\n \n\'\'\'\n# https://github.com/RoboDK/RoboDK-API/blob/master/Python/robolink.py\n# robodk_path variable to specify location of RoboDK.exe\n# under Ubuntu can not use "-NEWINSTANCE"\n\'\'\'\nstart_robodk.sh content\nLD_LIBRARY_PATH="/home/yen/RoboDK/bin/lib"\nexport LD_LIBRARY_PATH\n/home/yen/RoboDK/bin/RoboDK\n\'\'\'\nRDK = Robolink(robodk_path=r"Y:\\robodk522_portable\\bin\\RoboDK.exe",args=["-SKIPINI", "-EXIT_LAST_COM"])\n# Add robot and the accompanied Base coordinate\nprint(dir_path + \'/Fanuc-M-710iC-50.robot\')\n# relative directory or absolute directory will work for AddFile under Ubuntu\n#robot = RDK.AddFile(r"/home/yen/github/wcm2021/downloads/robodk/pick_and_place_kmol_mac/Fanuc-M-710iC-50.robot")\nrobot = RDK.AddFile(\'Fanuc-M-710iC-50.robot\')\n# Get the default robot base frame\nrobot_frame = RDK.Item(\'Fanuc M-710iC/50 Base\')\n# Move the base frame to the origin\nrobot_frame.setPose(transl(0,0,0))\n \n# Add a tool to an existing robot:\ntool = RDK.AddFile(dir_path + \'/MainTool.tool\', robot)\n \n# Add table 1\ntable1_frame = RDK.AddFrame(\'Table 1\')\ntable1_frame.setPose(transl(807.766544,-963.699898,41.478944))\ntable1_stl = RDK.AddFile(dir_path + \'/Table.stl\', table1_frame)\n \n# Add table 2\ntable2_frame = RDK.AddFrame(\'Table 2\')\ntable2_frame.setPose(transl(926.465508,337.151529,94.871928))\ntable2_stl = RDK.AddFile(dir_path + \'/Table.stl\', table2_frame)\n \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\nTCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\nTCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\nTCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n# Turn on automatic rendering\nRDK.Render(True)\n \n# Add balls\n# create a list with 30 elements\nballs = [None for _ in range(30)]\nlayer = [16, 9, 4, 1]\ncount = 0\nfor i in range(len(balls_list)):\n# transl(balls_list)\nballs[i] = RDK.AddFile(\'./ball.stl\', table1_frame)\nballs[i].setPose(transl(balls_list[i]))\ncount = count + 1\nif count <= 16:\nballs[i].setColor([1, 0, 0])\nelif count > 16 and count <= 25:\nballs[i].setColor([0, 1, 0])\nelif count > 25 and count <=29:\nballs[i].setColor([1, 1, 0])\nelse:\nballs[i].setColor([0, 0, 1])\n \n# Make a list of positions to place the objects\n# ball_list is the same as frame1_list\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Move balls\nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\n \ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \n# frame1 is the same as table1_frame\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \nwhile idTake >= 0:\n# ------------------------------------------------------------------\n# first priority: grab as many balls as possible\n# the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\nntake = min(nTCPs, idTake + 1)\n \n# approach to frame 1\nrobot.setPoseFrame(frame1)\nrobot.setPoseTool(TCP_0)\nrobot.MoveJ([0,0,0,0,10,-200])\nrobot.MoveJ(target_app_frame)\n \n# grab ntake balls from frame1\nfor i in range(ntake):\nTCPi = TCP_list[i]\nrobot.setPoseTool(TCPi)\n# calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\ntarget = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\ntarget_app = target*transl(0,0,-APPROACH)\nidTake = idTake - 1\nrobot.MoveL(target_app)\nrobot.MoveL(target)\nTCP_On(TCPi, i)\nrobot.MoveL(target_app)\n \n# ------------------------------------------------------------------\n# second priority: unload the tool\n# approach to frame2 and place the tool balls into table2\nrobot.setPoseTool(TCP_0)\nrobot.MoveJ(target_app_frame)\nrobot.MoveJ([0,0,0,0,10,-200])\nrobot.setPoseFrame(frame2)\nrobot.MoveJ(target_app_frame)\nfor i in range(ntake):\nTCPi = TCP_list[i]\nrobot.setPoseTool(TCPi)\nif idLeave > nballs_frame2-1:\nraise Exception("No room left to place objects in Table 2")\n \n# calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\ntarget = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\ntarget_app = target*transl(0,0,-APPROACH)\nidLeave = idLeave + 1\nrobot.MoveL(target_app)\nrobot.MoveL(target)\nTCP_Off(TCPi, i, frame2)\nrobot.MoveL(target_app)\n \nrobot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200]) \n RoboDK 機械手臂測試 \n \n 直播 \n W13 W14 \n \n \n \n', 'tags': '', 'url': 'week13~14.html'}, {'title': 'week15', 'text': '項目1 \n 影片1 \n \n 影片字幕中文(google翻譯): \n 我們在前面看到了這個簡單的雙連桿機器人 關於正向運動學的講座。 \n 描述了該機器人的工具提示位姿 簡單地由兩個數字，坐標 x 和 \n y 相對於世界坐標系。 \n 所以，這里的問題是，給定 x 和 y， 我們要確定連接的角度 Q1 \n 和 Q2。 \n 我們將遵循的解決方案 在這個特定的部分是一個幾何 \n 一。 \n 我們將從一個簡單的作品開始 的建設。 \n 我們將覆蓋紅色三角形 在我們的機器人之上。 \n 我們知道終點坐標是x， y，所以三角形的垂直高度 \n 是 y，水平寬度是 x。 \n 並且，使用畢達哥拉斯定理，我們可以寫出 r 平方等於 x 平方加上 y 平方。 \n 到目前為止，很容易。 \n 現在，我們要看看這個三角形 此處以紅色突出顯示，我們想確定 \n 角度α。 \n 為了做到這一點，我們需要使用余弦 規則。 \n 而且，如果你對余弦有點生疏 規則，這里有一點覆習。 \n 我們有一個任意三角形。 \n 我們不必有任何直角 它，我們將標記長度 \n 這條邊作為 A 和相反的角度 邊緣，我們將標記為小 a。 \n 而且，我們對這條邊和這條邊做同樣的事情 角度，還有這條邊和這個角。 \n 所以，總而言之，雙方都被標記為首都 A、B 和 C，角度標記為小 \n a、小b和小c。 \n 所以，余弦規則就是這種關系 這里。 \n 這有點像畢達哥拉斯定理，除了 對於這個額外的術語，最後的 cos \n 一個在里面。 \n 現在，讓我們將余弦規則應用於 我們看了一會兒特定的三角形 \n 前。 \n 寫下來很簡單 這種特殊的關系。 \n 我們可以隔離術語 cos alpha，它給出 我們感興趣的角度α \n 在。 \n 而且，它是根據常數定義的 鏈接長度，A1 和 A2 以及位置 \n 末端執行器，x 和 y。 \n 我們可以寫出這個簡單的關系 角α和Q2。 \n 而且，我們從余弦的形狀知道 Q2 的 cos 必須等於負的函數 \n cos 阿爾法。 \n 這一次，我們只寫一個表達式 對於連接角 Q2 的余弦。 \n 現在，我們要再畫一個紅色 三角形，我們將應用一些簡單的 \n 三角函數在這里。 \n 如果我們知道 Q2，那麽我們就知道這個長度和 這個紅色三角形的長度。 \n 我們可以把這個關系寫成正弦 的連接角 Q2。 \n 現在，我們可以考慮這個更大的三角形 其角為β，此邊長為 \n 三角形在這里以藍色給出。 \n 並且，三角形另一邊的長度 這是。 \n 所以，現在我們可以寫一個表達式 此處的這些參數的角度β。 \n 回到我們畫的紅色三角形 之前，我們可以建立之間的關系 \n Q1 和角β。 \n 介紹另一個角度，這個伽馬 我們可以寫出之間的關系 \n 角度伽馬和工具提示坐標 x 和y。 \n 現在，我們可以寫出一個簡單的關系 我們構建的角度，伽馬 \n 和 beta 以及我們感興趣的連接角 其中是 Q1。 \n 而且，總的關系看起來有些東西 像這樣。 \n 相當覆雜的關系，它給了我們 連接的角度，即 Q1 \n 末端執行器坐標 y 和 x，以及 一堆常量，a1 和 a2，它是 \n 也是第二關節角度的函數， Q2。 \n 所以，讓我們總結一下我們有什麽 派生於此。 \n 我們有 Q2 的余弦表達式 我們有 Q1 的表達式。 \n 現在，余弦函數關於 0. \n 所以，如果我們知道余弦值 Q2，那麽有兩種可能的解決方案， \n 一個正角和一個負角。 \n 我們將明確選擇積極的 角度，這意味著我可以寫出這個表達式 \n 這里。 \n 現在，我們有了我們所說的逆 這個雙連桿機器人的運動學解決方案。 \n 我們有兩個連接角的表達式， Q1 和 Q2 在末端執行器姿勢方面 \n x 和 y，以及一堆常量。 \n 你注意到這兩個方程不是 獨立的。 \n 事實上，Q1 的方程取決於 Q2 的解決方案。 \n 在這種情況下，Q2 是負數，我們將 用負數寫出 Q2 的解 \n 符號在反余弦前面。 \n 現在，我們需要解決 Q1，所以我們要 介紹這個特殊的紅色三角形， \n 我們之前求解的角度β， 以及用術語定義的角度伽馬 \n y 和 x。 \n 現在，我們寫一個稍微不同的關系 在 Q1、gamma 和 beta 之間，與什麽不同 \n 我們以前有過。 \n 涉及到符號的變化。 \n 然後，我們可以替換之前的所有 方程並提出這個表達式 \n 對於 Q1。 \n 同樣，這里的符號发生了變化。 \n 以前，這是一個負面信號。 \n 而且，這里是總結形式的解決方案 對於我們的雙連桿的逆運動學 \n 當機器人處於這種特定配置時， 其中 Q2 為負。 \n 讓我們比較兩種解決方案，案例 其中 Q2 為正，Q2 為正的情況 \n 是否定的。 \n 影片2 \n \n \n 影片字幕中文(google翻譯): \n 這里我們有與我們相同的兩個鏈接機器人 只是看著，但這次我們要 \n 使用分析方法解決它，即 我們是否會更多地依賴代數， \n 特定的線性代數而不是幾何。 我們有一個表達式 E，它是齊次的 \n 表示姿勢的變換 機器人終結者，我們看了這個 \n 在上一課中，我們可以編寫 endefector 構成一個基本齊次序列 \n 轉換。 Q1 的旋轉，平移 沿 X 方向 A1，旋轉 \n Q2 然後在 X 方向上平移 通過 A2。如果我展開這個，乘以所有 \n 一起轉換，我得到了表達 顯示在這里；三乘三同構變換 \n 表示機器人姿態的矩陣 終結者。 \n 現在對於這個特殊的兩連桿機器人，我們 只對它的位置感興趣 \n endefector，它是 X 和 Y 坐標，它們 這兩個元素是同質的嗎 \n 變換矩陣，所以我要覆制 那些出來。所以這里又是我們的表達 \n 對於 X 和 Y 我們要做的是 一個相當常見的技巧，我們要平方 \n 並添加這兩個方程，我得到了一個關系 看起來像這樣。現在我可以解決 \n 根據 endefector 的關節角度 Q2 姿勢 X 和 Y 以及機器人的常數 A1 和 A2。 \n 現在我要做的是應用總和 的角度身份。我要擴展這些 \n 項，Q1 的正弦加 Q2 或 Q1 的余弦加 Q2 為了讓生活更輕松一點，我 \n 打算建造一些變電站，所以無論在哪里 我有 cos Q2，我要寫 C2 以及在哪里 \n 曾經我有正弦 Q2，我要寫 S2。 這是一個相當常見的速記，當人們 \n 正在研究機器人運動學方程。 這是制作後的方程式 \n 替代品。看這兩個方程， 我可以看到他們掉進了一個很好的井里 \n 已知形式，對於該形式有一個非常 眾所周知的解決方案。所以我要考慮 \n 只是其中一個方程，方程為 Y 並使用我們眾所周知的身份 \n 解決方案，我可以確定 變量小a、小b和小c \n 一旦我確定了這些，我就可以 只需寫下 Q1 的解決方案，即 \n 在這個特定的情況下相當於 theta 案件。 \n 這里再次是我們對 Q1 的表達式，覆制 從上一張幻燈片結束，我們可能還記得 \n 從我們早期的工作中我們確定 這種特殊的關系； X平方加 \n Y 平方等於這個特定的覆數 表達。所以我可以用和代替它 \n 做一些簡化，我最終得到這個 Q1 的表達式稍微簡單一些。和 \n 這是我得到的相同表達 上一節中的幾何方法。 \n W15直播 \n', 'tags': '', 'url': 'week15.html'}]};