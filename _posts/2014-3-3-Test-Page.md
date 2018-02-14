---
layout: post
title: Test Page
---



```python
from PIL import ImageGrab
import numpy as np
import cv2
import pyautogui as key

pt1 = (100,50)
pt2 = (140,80)


cv2.namedWindow('track')
cv2.resizeWindow('track', (400,400))

before = True;


while(True):

    img = ImageGrab.grab(bbox=(107,188,465,294))
    
    img_np = np.array(img)
    hsv = cv2.cvtColor(img_np, cv2.COLOR_BGR2HSV)
    #frame = cv2.resize(frame,(1366/2,780),(100,100))
    
    lower_blue = np.array([0,0,64])
    upper_blue = np.array([15,17,85])
    
    
    # Threshold the HSV image to get only blue colors
    mask = cv2.inRange(hsv, lower_blue, upper_blue)
    
    data = mask[pt1[1]:pt2[1],pt1[0]:pt2[0]]
    
    now = any(np.any(data,1))
    
    if(now and not before):
        cv2.rectangle(img_np,pt1,pt2,(255,0,0),3)
        key.press("up")
    else:
        cv2.rectangle(img_np,pt1,pt2,(0,255,0),3)
    
    before = now
    
    cv2.imshow("test", mask)
    cv2.imshow("track", data)
    cv2.imshow("original", img_np)
    if cv2.waitKey(25) & 0xFF == ord('q'):
        break
        
cv2.destroyAllWindows()

```

Loremipsum dolosaldfjalsdfk

Test:
$$-b^2 \pm \sqrt{b^2-4ac}\over 2a$$

---
