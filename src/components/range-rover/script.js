export default {
  name: 'range-rover',

  props: {
    minimum: {
      type: [Number, String],
      default: 0,
    },
    maximum: {
      type: [Number, String],
      default: 60,
    },
    first: [Number, String],
    second: [Number, String],
    rangeColor: String,
    rounding: {
      type: [Number, String],
      default: 0,
    }

  },
  data: function () {
    return {
      canvas: "",
      context: "",
      padding: 4,
      centerX1: 50,
      centerY1: 20,
      centerX2: 255,
      centerY2: 20,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      radius: 16,
      rate: '',
      startValue: 0,

      accentColor: '#ffffff',
      colorOne: '#90d347',
      colorTwo: '#bf30b8',


      min: 0,
      max: 60,

      low: this.min,
      high: this.max,

      isDrag: false,
      isFirstDrag: false,
      isSecondDrag: false,
    }
  },

  computed: {},

  watch: {
    first (value) {
      //  console.log("Изменился первый");
      this.low = value;
    },

    second (value) {
      //  console.log("Изменился второй");
      this.high = value;
    },

    minimum (value) {
      this.min = value;
    },

    maximum (value) {
      if (value) {
        this.max = value;

      } else {
        this.max = 0;
      }
    },

    low(value) {
      //  console.log("Изменилась нижнаяя граница");
      let first = (value / this.rate) + this.radius;
      if (first > this.centerX2 - this.radius) {
        this.centerX1 = this.centerX2 - this.radius;
      } else {
        this.centerX1 = first;
      }
      this.preDraw();
    },

    high(value) {
      // console.log("Изменилась верхняя граница");
      let second = (value / this.rate) - this.radius;
      if (second < this.centerX1) {
        this.centerX2 = this.centerX1 + this.radius;
      } else {
        this.centerX2 = second;
      }
      this.preDraw();
    },

    min(value) {
      this.setConfig();
      this.low = this.min;
    },

    max(value) {
      this.setConfig();
      this.high = this.max;
    },
  },

  methods: {
    mouseDownHandler: function (event) {
      // console.log("Мышка вниз");
      let boundingRect = this.canvas.getBoundingClientRect();
      let newPosition = event.pageX -  boundingRect.left;
      //  console.log("Bundle rect: x = " + boundingRect.left + "  y = " + boundingRect.top);
      //  console.log("Тестовое знчение координаты в канвасе: x = " + (event.pageX - boundingRect.left));
      this.isDrag = true;

      if (newPosition > this.centerX1 - this.radius && newPosition < this.centerX1 + this.radius) {
        this.isFirstDrag = true;
      } else if (newPosition > this.centerX2 - this.radius && newPosition < this.centerX2 + this.radius) {
        this.isSecondDrag = true;
      }

    },
    mouseUpHandler: function () {
      this.isDrag = false;
      this.isFirstDrag = false;
      this.isSecondDrag = false;
    },
    mouseLeaveHandler: function () {
      this.isDrag = false;
      this.isFirstDrag = false;
      this.isSecondDrag = false;
    },
    mouseMoveHandler: function (event) {
      if (this.isDrag) {

        let boundingRect = this.canvas.getBoundingClientRect();
        let newPosition = event.pageX -  boundingRect.left;

        if (this.isFirstDrag) {
          if (newPosition >= this.radius - 1 && newPosition <= this.centerX2 - this.radius) {
            this.centerX1 = newPosition;
            let firstValue = (this.rate * (newPosition - this.radius)).toFixed(this.rounding);
            if (firstValue < this.min) {
              firstValue = this.min;
            }
            this.low = firstValue;
            this.$emit('changeFirst', firstValue);
            this.preDraw();
          }
        } else if (this.isSecondDrag) {
          if (newPosition < this.canvas.width - this.radius && newPosition >= this.centerX1 + this.radius) {
            this.centerX2 = newPosition;

            //    console.log("Центр второго маркера: " + this.centerX2)
            let secondValue = (this.rate * (newPosition + this.radius)).toFixed(this.rounding);
            if (secondValue > this.max) {
              secondValue = this.max;
            }
            this.high = secondValue;
            this.$emit('changeSecond', secondValue);
            this.preDraw();
          }
        }
      } else {

      }
    },
    preDraw: function () {
      this.context.lineWidth = 8;
      this.context.lineCap = "round";
      this.context.strokeStyle = "#7B42B1";
      this.context.fillStyle = this.accentColor;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.moveTo(this.startValue, this.centerY2);
      this.context.lineTo(this.canvas.width - this.startValue, this.centerY2);
      this.context.stroke();

      this.context.beginPath();
      this.context.moveTo(this.centerX1, this.centerY2);
      this.context.lineTo(this.centerX2, this.centerY2);

      this.context.stroke();

      this.context.beginPath();
      this.context.arc(this.centerX1, this.centerY1, this.radius, this.startAngle, this.endAngle);
  //    this.context.fillText(this.low, this.centerX1, this.centerY1);
      this.context.fill();

      this.context.beginPath();
      this.context.arc(this.centerX2, this.centerY2, this.radius, this.startAngle, this.endAngle);
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = "#9153c7";
      this.context.font = "18px GothamPro bold";
      if(this.low < 10) {
        this.context.fillText(this.low, this.centerX1-5, this.centerY1+5);
      } else if(this.low >= 10) {
        this.context.fillText(this.low, this.centerX1-10, this.centerY1+5);
      } else if(this.min == -0) {
        this.low = 0;
      }
      this.context.fill();

      this.context.beginPath();
      this.context.fillStyle = "#9153c7";
      this.context.font = "18px GothamPro bold";
      this.context.fillText(this.high, this.centerX2-10, this.centerY2+5);
      this.context.fill();
    },

    setConfig: function () {
      this.rate = (this.max - this.min) / (this.canvas.width - this.radius * 2);

      if (this.first || this.first === 0) {
        //  console.log("Задано состояние первого")
        this.low = this.first;
        let preFirst = this.first / this.rate + this.radius;
        if (preFirst > this.centerX2 - this.radius) {
          this.centerX1 = this.centerX2 - this.radius;
        } else {
          this.centerX1 = preFirst;
        }
      }
      if (this.second || this.second === 0) {
        // console.log("Задано состояние второго")
        this.high = this.second;
        let preSecond = this.second / this.rate - this.radius;
        if (preSecond < this.centerX1 + this.radius) {
          this.centerX2 = this.centerX1 + this.radius;
        } else {
          this.centerX2 = preSecond;
        }
      }

      this.preDraw();
    },

    blurring: function (who) {
      if (who === "low") {
        if (this.low > this.high) {
          this.low = this.high;
        }
      } else {
        if (this.high < this.low) {
          this.high = this.low;
        }
      }
    },
  },

  mounted: function () {
    this.canvas = this.$refs.rangeCanvas;
    this.context = this.canvas.getContext("2d");
    this.startValue = this.radius + this.padding;
    this.setConfig();

    if (this.minimum || this.minimum === 0) {
      this.min = this.minimum;
    }
    if (this.maximum || this.maximum === 0) {
      this.max = this.maximum;
    }

    if (this.rangeColor === "green") {
      this.accentColor = this.colorOne;
    } else if (this.rangeColor === "purple") {
      this.accentColor = this.colorTwo;
    }
    this.$emit('changeFirst', this.low);
    this.$emit('changeSecond', this.high);
    this.preDraw();
  },

  created() {
    this.low = 8;
    this.high = 32;
  }

};

