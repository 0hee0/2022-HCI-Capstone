# Comfort: 심전도 기반 우울감 감지 서비스

심전도 분석을 통해 우울감을 감지하고, 우울감 감소를 위한 도움을 주는 서비스입니다.

## Table of Content

- [About](#about)
- [Features](#features)
- [Model](#model)
- [Technologies](#technologies) <!-- - [Architecture](#architecture) -->
- [Getting Started](#getting-started)

## About

건강보험심사평가원이 발표한 최근 5년(2017년~2021년) 간 우울증 통계 분석 결과를 보면, 우울증 환자수가 2017년 69만 1,164명 대비 2021년에 93만 3,481명으로 35.1%(연평균 7.8%) 증가했습니다. 우울감을 겪는 사람들이 점점 많아지고 있지만, 본인이 언제 무슨 이유 때문에 우울한 건지, 그리고 현재 우울한 상태인지조차 잘 모르는 사람들이 많습니다.

따라서 심전도 분석을 통해 우울감을 감지하고, 우울감을 느끼는 요일과 시간 통계를 통해 우울감을 느끼는 요인을 알 수 있게 돕고, 일기 작성과 신체적 활동 장려를 통해 우울감을 줄이는 것을 도와 더 건강한 삶을 살 수 있도록 하는 서비스를 개발했습니다.

## Features

### Dashboard

지난 한 주동안 우울감을 느낀 빈도수를 요일별로 표시합니다. 옵션을 1주에서 1일로 변경하면, 어제 기상 시간부터 취침 시간까지 우울감을 느낀 시간대를 표시해줍니다.

https://user-images.githubusercontent.com/53266682/210122525-9869e635-eba6-4c4b-9d79-2cbf4eddb4c1.mov

### Checklist

신체적 활동을 했는지 여부를 체크합니다. 신체 활동을 했다고 체크하면, 우측 캘린더에 운동을 했다는 표시가 추가됩니다.

https://user-images.githubusercontent.com/53266682/210122552-4c242669-5f96-41a1-8010-8e5032976847.mov

### Diary

일기 버튼을 눌러서 기분 일기를 작성할 수 있습니다. 작성한 일기도 우측 캘린더에서 확인이 가능합니다.

https://user-images.githubusercontent.com/53266682/210122558-c884a240-d4bc-4db1-a80e-5a87453faf39.mov


### Calendar

캘린더에서는 일별 신체적 활동과 일기 작성 여부를 확인할 수 있고, 작성한 일기는 다시 확인이 가능합니다.

https://user-images.githubusercontent.com/53266682/210122562-47a09a2a-ebf6-4c07-bd24-cb18e854b497.mov


## Model

두 논문을 통해 우울감과 PVC(Premature Ventricular Contraction)의 상당한 증가가 관련있다고 판단했습니다.
- 📄 [THE EFFECT OF DEPRESSION ON PREMATURE VENTRICULAR CONTRACTIONS (PVCS) IN CORONARY HEART DISEASE (CHD) PATIENTS UNDERGOING PERCUTANEOUS CORONARY INTERVENTION (2012)](https://heart.bmj.com/content/98/Suppl_2/E150.3)
- 📄 [Relationship between premature ventricular complexes and depressive symptoms in non-ST-elevation acute coronary syndrome (2013)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3760579/)

그리고 아래 논문을 이용하여 LSTM AutoEncoder를 이용해 우울감을 감지하는 모델을 학습시켰습니다.   
- 📄 [Predicting the Risk of Depression Based on ECG Using RNN (2021)](https://www.hindawi.com/journals/cin/2021/1299870/)

데이터셋은 [ECG5000](http://timeseriesclassification.com/description.php?Dataset=ECG5000)을 사용하고, 모델은 LSTM AutoEncoder를 사용하여 우울감 감지 모델을 학습시킵니다. 모델은 PVC를 예측하며, loss가 12 이상이면 PVC라고 판단합니다.

학습한 모델에 [S-Patch](https://www.wellysis.com/)로 수집한 ECG 데이터를 입력하여 시간당 PVC 빈도수를 세고, 시간 당 PVC가 10번 이상 발생하면 해당 시간은 우울했다고 표시합니다. (`comfort-ml/sample_recorded.txt`는 sample ECG data입니다)


## Technologies

### Frontend
![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Machine Learning
![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)
![Python](https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)


<!-- ## Architecture -->


## Getting Started

```
$ cd comfort-fe
$ yarn
$ yarn start # http://localhost:3000
```

## TODO

프론트엔드 개발만 했기에, 추후에 백엔드 개발을 할 예정입니다.
