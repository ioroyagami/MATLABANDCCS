/*
 * File: SPWM.h
 *
 * Code generated for Simulink model 'SPWM'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.14 (R2018a) 06-Feb-2018
 * C/C++ source code generated on : Fri Dec 14 15:36:02 2018
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Texas Instruments->C2000
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_SPWM_h_
#define RTW_HEADER_SPWM_h_
#include <math.h>
#include <stddef.h>
#include <string.h>
#ifndef SPWM_COMMON_INCLUDES_
# define SPWM_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "F2837xD_device.h"
#include "F2837xD_Examples.h"
#include "IQmathLib.h"
#endif                                 /* SPWM_COMMON_INCLUDES_ */

#include "SPWM_types.h"
#include "MW_target_hardware_resources.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

extern void config_ePWM_GPIO (void);

/* Block states (default storage) for system '<Root>' */
typedef struct {
  real_T Delay_DSTATE;                 /* '<S1>/Delay' */
} DW_SPWM_T;

/* Parameters (default storage) */
struct P_SPWM_T_ {
  real_T Delay_InitialCondition;       /* Expression: 0.0
                                        * Referenced by: '<S1>/Delay'
                                        */
  real_T Constant_Value;               /* Expression: 0.0001
                                        * Referenced by: '<S1>/Constant'
                                        */
  real_T SineWaveFunction_Amp;         /* Expression: 40
                                        * Referenced by: '<S1>/Sine Wave Function'
                                        */
  real_T SineWaveFunction_Bias;        /* Expression: 50
                                        * Referenced by: '<S1>/Sine Wave Function'
                                        */
  real_T SineWaveFunction_Freq;        /* Expression: 2
                                        * Referenced by: '<S1>/Sine Wave Function'
                                        */
  real_T SineWaveFunction_Phase;       /* Expression: 0
                                        * Referenced by: '<S1>/Sine Wave Function'
                                        */
  uint16_T Delay_DelayLength;          /* Computed Parameter: Delay_DelayLength
                                        * Referenced by: '<S1>/Delay'
                                        */
};

/* Real-time Model Data Structure */
struct tag_RTM_SPWM_T {
  const char_T *errorStatus;
};

/* Block parameters (default storage) */
extern P_SPWM_T SPWM_P;

/* Block states (default storage) */
extern DW_SPWM_T SPWM_DW;

/* Model entry point functions */
extern void SPWM_initialize(void);
extern void SPWM_terminate(void);

/* Real-time Model object */
extern RT_MODEL_SPWM_T *const SPWM_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S1>/Scope' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'SPWM'
 * '<S1>'   : 'SPWM/Subsystem'
 */
#endif                                 /* RTW_HEADER_SPWM_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
