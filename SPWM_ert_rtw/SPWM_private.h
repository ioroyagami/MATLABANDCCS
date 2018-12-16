/*
 * File: SPWM_private.h
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

#ifndef RTW_HEADER_SPWM_private_h_
#define RTW_HEADER_SPWM_private_h_
#include "rtwtypes.h"
#include "SPWM.h"

void isr_int3pie1_task_fcn(void);
void isr_int1pie2_task_fcn(void);
extern void configureGPIOExtInterrupt(void);
extern void SPWM_Subsystem_Init(void);
extern void SPWM_Subsystem_Reset(void);
extern void SPWM_Subsystem_Start(void);
extern void SPWM_Subsystem(void);
void isr_int1pie2_task_fcn(void);
void SPWM_ASYNC3(int controlPortIdx);

#endif                                 /* RTW_HEADER_SPWM_private_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
