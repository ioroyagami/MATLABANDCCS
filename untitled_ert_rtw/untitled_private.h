/*
 * File: untitled_private.h
 *
 * Code generated for Simulink model 'untitled'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.14 (R2018a) 06-Feb-2018
 * C/C++ source code generated on : Thu Dec 13 22:51:41 2018
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Texas Instruments->C2000
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_untitled_private_h_
#define RTW_HEADER_untitled_private_h_
#include "rtwtypes.h"
#include "untitled.h"

void isr_int3pie1_task_fcn(void);
void isr_int1pie2_task_fcn(void);
extern void configureGPIOExtInterrupt(void);
extern void untitled_Subsystem_Init(void);
extern void untitled_Subsystem_Reset(void);
extern void untitled_Subsystem_Start(void);
extern void untitled_Subsystem(void);
void isr_int1pie2_task_fcn(void);
void untitled_ASYNC3(int controlPortIdx);

#endif                                 /* RTW_HEADER_untitled_private_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
